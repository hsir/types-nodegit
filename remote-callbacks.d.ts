export class RemoteCallbacks {
    version?: number;
    credentials?: Function;
    certificateCheck?: Function;
    transferProgress?: any;
    transport?: Function;
    payload?: undefined;
    [x: string]: any
}
