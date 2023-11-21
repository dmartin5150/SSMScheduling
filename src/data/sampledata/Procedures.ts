import { Procedure } from "../datatypes/procedure";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";


export const Procedures:Procedure[] = [
    {providerId: 1,providerName:'Elrod,Leonard', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Carpal Tunnel Release', room:'BH JRI O6', FIN:'570422303',inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {providerId: 1,providerName:'Elrod,Leonard', timeString:'8:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {providerId: 1,providerName:'Elrod,Leonard', timeString:'9:00 AM - 10:30 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED }
]
