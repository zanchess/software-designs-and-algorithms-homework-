interface Job {
    priority: number;
}

class JobRunner {
    private jobs: Job[];
    
    constructor(jobs: Job[]) {
        this.jobs = jobs;
    }

    run(): void {
        const sortedJobs = this.mergeSortJobByPriority(this.jobs);
        this.doJobs(sortedJobs);
    }

    doJobs (jobs: Job[]){
        let size = jobs.length;
        while(size) {
            const currentJob = jobs.pop();
            if (currentJob){
                size--;
                console.log(`priority ${currentJob.priority}`);
            }
        }
    }

    merge(left: Job[], right: Job[]) {
        const result = [];
        const leftLenght = left.length;
        const rightLength = right.length;
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftLenght && rightIndex < rightLength) {
            if (left[leftIndex].priority < right[rightIndex].priority) {
                result.push(left[leftIndex++]);
            } else {
                result.push(right[rightIndex++]);
            }
        }

        while (leftIndex < leftLenght) {
            result.push(left[leftIndex++]);
        }

        while (rightIndex < rightLength) {
            result.push(right[rightIndex++]);
        }

        return result;
    }

    mergeSortJobByPriority(jobs: Job[]): Job[] {
        const size = jobs.length;
        const mid = Math.floor(size * 0.5);
        const left = jobs.slice(0, mid);
        const right = jobs.slice(mid, size);

        if (size === 1) {
            return jobs;
        }

        return this.merge(this.mergeSortJobByPriority(left), this.mergeSortJobByPriority(right));
    }
}

function generateRandomJobs(count: number): Job[] {
    const jobs: Job[] = [];
    for (let i = 0; i < count; i++) {
        const priority = Math.floor(Math.random() * 10) + 1;
        jobs.push({ priority });
    }
    return jobs;
}

const jobs = generateRandomJobs(10000);
const runner = new JobRunner(jobs);
runner.run();