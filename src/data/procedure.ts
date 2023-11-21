import { SchedulingStatus } from "./schedulingStatus";

export type Procedure = {
    ProviderName: string;
    ProviderId: number;
    Timing:string;
    PatientName:string;
    ProcdureName:string;
    Room?:string;
    FIN?:string;
    inBlock:boolean;
    status:SchedulingStatus
}