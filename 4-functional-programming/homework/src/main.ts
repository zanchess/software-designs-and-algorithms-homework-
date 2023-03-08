import { Either, fromPromise, ap, right, getOrElse, flatten, left } from './fp/either';
import { pipe } from './fp/utils';
import { fetchClient, fetchExecutor } from './fetching';
import { ClientUser, ExecutorUser, Point } from './types';
import {fromNullable, isSome } from './fp/maybe';
import { fromCompare, ordNumber } from "./fp/ord";
import { sort } from "./fp/array";



type Response<R> = Promise<Either<string, R>>

const getExecutor = (): Response<ExecutorUser> => fromPromise(fetchExecutor());
const getClients = (): Response<Array<ClientUser>> => {
    const clientsResultPromise = fetchClient().then((clients) => {
        return clients.map(client => {
            return {
                ...client,
                demands: fromNullable(client.demands)
            };
        });
    });
    return fromPromise(clientsResultPromise);
}


export enum SortBy {
  distance = 'distance',
  reward = 'reward',
}

const calculateDistance = (p1: Point, p2: Point): number => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) * 1000) / 1000;
};



export const show = (sortBy: SortBy) => (clients: Array<ClientUser>) => (executor: ExecutorUser): Either<string, string> => {
    const demandFilteredClients = clients.filter(client => {
        return isSome(client.demands)
            ? client.demands.value.some(demand => executor.possibilities.includes(demand))
            : client
    });

    const clientSortOrd = sortBy === SortBy.reward
        ? fromCompare((client2: ClientUser, client1: ClientUser) => ordNumber.compare(client1[sortBy], client2[sortBy]))
        : fromCompare((client2: ClientUser, client1: ClientUser) => {
            return ordNumber.compare(calculateDistance(client2.position, executor.position), calculateDistance(client1.position, executor.position))
        });

    const getFullMessage = (sortedClients: Array<ClientUser>, clients: Array<ClientUser>, sortBy: SortBy) => (
        `This executor meets the demands of only ${sortedClients.length} out of ${clients.length} clients\n
Available clients sorted by ${sortBy === SortBy.reward ? 'highest reward' : 'distance to executor'}:`
    );

    const getSortedClientsString = (sortedClients: Array<ClientUser>) => sortedClients.reduce((acc, client) => {
        acc += `\nname: ${client.name}, distance: ${calculateDistance(client.position, executor.position)}, reward: ${client.reward}`;
        return acc;
    }, '');

    return demandFilteredClients.length > 0
        ? demandFilteredClients.length === clients.length
            ? right('This executor meets all demands of all clients!')
            : right(`${getFullMessage(demandFilteredClients, clients, sortBy)}${getSortedClientsString(sort(clientSortOrd)(demandFilteredClients))}`)
        : left('This executor cannot meet the demands of any client!');
};


export const main = (sortBy: SortBy): Promise<string> => (
  Promise
    .all([getClients(), getExecutor()]) // Fetch clients and executor
    .then(([clients, executor]) => (
      pipe(
        /**
         * Since the "show" function takes two parameters, the value of which is inside Either
         * clients is Either<string, Array<Client>>, an executor is Either<string, Executor>. How to pass only Array<Client> and Executor to the show?
         * Either is an applicative type class, which means that we can apply each parameter by one
         */
        right(show(sortBy)), // Firstly, we need to lift our function to the Either
        ap(clients), // Apply first parameter
        ap(executor), // Apply second parameter
        flatten, // show at the end returns Either as well, so the result would be Either<string, Either<string, string>>. We need to flatten the result
        getOrElse((err) => err) // In case of any left (error) value, it would be stopped and show error. So, if clients or executor is left, the show would not be called, but onLeft in getOrElse would be called
      )
    ))
);
