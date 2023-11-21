import { SCHEDULING_STATUS } from "./schedulingStatus";

export type Procedure = {
    providerId:number, 
    providerName: string;
    timeString:string;
    patientName:string;
    procedureName:string;
    room?:string;
    FIN?:string;
    inBlock:boolean;
    scheduleStatus:SCHEDULING_STATUS;
}