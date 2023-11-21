import { Procedure } from "../datatypes/procedure";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";


export const PROCEDURES:Procedure[] = [
    {procedureId:1, providerId: 1,providerName:'Elrod,Leonard', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Carpal Tunnel Release', room:'BH JRI O6', FIN:'570422303',inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:2,providerId: 1,providerName:'Elrod,Leonard', timeString:'8:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:3,providerId: 1,providerName:'Elrod,Leonard', timeString:'9:00 AM - 10:30 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:4,providerId: 2,providerName:'Rodriquez,Alverez', timeString:'7:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 08', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:5,providerId: 4,providerName:'Jones,William', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:6,providerId: 4,providerName:'Jones,William', timeString:'8:00 AM - 9:15 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.NEEDS_REVISION },
    {procedureId:7,providerId: 4,providerName:'Jones,William', timeString:'9:15 AM - 10:45 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 06', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.OTHER_PRACTICE },
    {procedureId:8,providerId: 4,providerName:'Jones,William', timeString:'10:45 AM - 12:15 PM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release', inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
]
