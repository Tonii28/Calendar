import moment from "moment";
import { start } from "repl";


export enum EventType {
  PCT16 = "PCT21016 - REMA",
  PCT18 = "PCT21018 - MARIUSPEDERSEN AP",
  AGTHRM="AGTHRM - Human Resources & Readiness Agenda",
  AGTENG="Engineering Agenda"
}

export const EVENT_TYPE_TEXT_COLORS = {
  PCT16: "blue",
  PCT18: "orange",
  AGTENG: "brown",
  AGTHRM: "green"
};

export const EVENT_TYPE_COLORS = {
  PCT16: "#aaddfa",
  PCT18: "#f7d894",
  AGTENG: "#deaaa2",
  AGTHRM: "#cef5d0"
};

export const EVENTS: any[] = [
  {
    start: new Date(2023, 9, 23, 9,20,0),
    end: new Date(2023, 9, 23, 11,34,33),
    data: {
     
        id: 30166,
        type: EventType.PCT16,
        description: "Unsaved changes on contract"
    },
   
  },
  {
    start: new Date(2023, 9, 23, 11,35,0),
    end: new Date(2023, 9, 23, 15,15,0),
    data: {
     
        id: 30211,
        type: EventType.PCT16,
        description: "When creating new organization, user needs to select at least on relationship"
    },
   
  },
  {
    start: new Date(2023, 9, 23, 15,16,0),
    end: new Date(2023, 9, 23, 16,46,23),
    data: {
     
        id: 30215,
        type: EventType.PCT16,
        description: "Portal - Tooltip in left navigtion menu - show also category in tooltip text when collapsed"
    },
   
  },
  {
    start: new Date(2023, 9, 24, 9,0,0),
    end: new Date(2023, 9, 24, 10,57,34),
    data: {
     
        id: 30211,
        type: EventType.PCT16,
        description: "When creating new organization, user needs to select a least one relationship"
    },
   
  },
  {
    start: new Date(2023, 9, 24, 10,59,0),
    end: new Date(2023, 9, 24, 12,2,0),
    data: {
     
        id: 30173,
        type: EventType.PCT18,
        description: "Call with Frantisek"
    },
   
  },
  {
    start: new Date(2023, 9, 24, 12,3,0),
    end: new Date(2023, 9, 24, 13,3,0),
    data: {
     
        id: 30033,
        type: EventType.PCT16,
        description: "Treeview PCF - default collapsed"
    },
   
  },
  {
    start: new Date(2023, 9, 24, 13,4,0),
    end: new Date(2023, 9, 24, 13,55,0),
    data: {
     
        id: 30173,
        type: EventType.PCT18,
        description: "Call with Frantisek"
    },
   
  },
  {
    start: new Date(2023, 9, 24, 13,56,0),
    end: new Date(2023, 9, 24, 15,26,14),
    data: {
     
        id: 30230,
        type: EventType.PCT16,
        description: "Tree view PCF - infinit loading when you leave selecting of status reason"
    },
   
  },
];