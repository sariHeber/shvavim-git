import React from "react";
import { SariHeimannComp } from "./sariHeimann";
import { ElishevaComponnent } from "./elisheva";
import { Malky } from "./malky";

import { DvoraShechterComp } from "./DvoraShechter";
import { TamarHorn } from "./TamarH";
export const OurComponents = () => {
    return (
        <div>
            <h1>our project</h1>
            <SariHeimannComp></SariHeimannComp>
            <ElishevaComponnent></ElishevaComponnent>

            <Malky></Malky>
            <DvoraShechterComp></DvoraShechterComp>
            <TamarHorn></TamarHorn>
        </div>
    )
}