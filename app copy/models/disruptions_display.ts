import {Disruption}  from '../models/disruptions'
import { DisruptionsComponent } from '../components/disruptions/disruptions.component';


export class DisruptionsDisplay{

    title:string;
    description:string;


    constructor(title:string,
                description:string
                ){
                    this.title = title;
                    this.description = description;
    }

    public static getdisruptionsDisplay(disruptionModel:Disruption):DisruptionsDisplay[]{

        var disruptionDisplay: DisruptionsDisplay[] = [];

        var disruptionTypes:string[] = ["general","metro_train","metro_tram","metro_bus",
                                        "regional_train","regional_coach","regional_bus"];

        disruptionTypes.forEach(type=>{

                    if( disruptionModel.disruptions[type].length>0){

                        disruptionModel.disruptions[type].forEach( (disruptionItem)=>{
                            disruptionDisplay.push(
        
                               new DisruptionsDisplay(  disruptionItem["title"],
                                                        disruptionItem["description"])
                            );
                        }
                            
                        )
                        
                    }
            }

        
        )
        return disruptionDisplay;
    }
}