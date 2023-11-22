import { Procedure } from "../datatypes/procedure";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";
import { PROCEDURE_TYPES } from "../datatypes/procedure";


export const PROCEDURES:Procedure[] = [
    {procedureId:1, procedureType: PROCEDURE_TYPES.PROCEDURE, providerId: 1,providerName:'Elrod, Leonard', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Carpal Tunnel Release', room:'BH JRI O6', FIN:'570422303',inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:2,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 1,providerName:'Elrod, Leonard', timeString:'8:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:3,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 1,providerName:'Elrod, Leonard', timeString:'9:00 AM - 10:30 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:4,procedureType: PROCEDURE_TYPES.OPENTIME,  providerId: 1,providerName:'NA', timeString:'10:30 AM - 12:00 PM',patientName:'NA',procedureName:'NA',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:5,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 2,providerName:'Rodriquez, Alverez', timeString:'7:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 08', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:6,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:7,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', timeString:'8:00 AM - 9:15 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.NEEDS_REVISION },
    {procedureId:8,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', timeString:'9:15 AM - 10:45 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 06', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.OTHER_PRACTICE },
    {procedureId:9,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', timeString:'10:45 AM - 12:15 PM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release', inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
]
