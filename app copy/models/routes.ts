export interface Routes{
    routes :   [ {
       "route_type": "number",
       "route_id": "number",
       "route_name": "string",
       "route_number": "string",
       "route_gtfs_id": "string"
    }];
  
    status :   {
       "version": "string",
       "health": "number"
    };
  
 }