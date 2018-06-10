import { Repository } from './repository';
import { Oid } from './oid';

export class Graph {
    static aheadBehind(repo: Repository, local: Oid, upstream: Oid): Promise<{
        ahead: number
        behind: number
    }>;
    static descendantOf(repo: Repository, commit: Oid, ancestor: Oid): Promise<number>;
}
