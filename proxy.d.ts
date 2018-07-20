import { ProxyOptions } from './proxy-options';


export namespace Proxy {
    enum PROXY {
        NONE = 0,
        AUTO = 1,
        SPECIFIED = 2,
    }
}
    
export class Proxy {
    static initOptions(opts: ProxyOptions, version: number): number;
}
