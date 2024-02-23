import React from "react";
import { SariHeimannComp } from "./sariHeimann";
import { Rivka } from "./rivka";
import { Esther } from "./esther";
import { ElishevaComponnent } from "./elisheva";
import { SariStern } from "./SariStern";
import { Malky } from "./malky";

import { DvoraShechterComp } from "./DvoraShechter";
import { TamarHorn } from "./TamarH";
export const OurComponents = () => {
    return (
        <div>
            <h1>our project</h1>
            <SariHeimannComp></SariHeimannComp>
            <Rivka></Rivka>
            <Esther></Esther>
            <ElishevaComponnent></ElishevaComponnent>
            <SariStern></SariStern>
            <Malky></Malky>
            <DvoraShechterComp></DvoraShechterComp>
            <TamarHorn></TamarHorn>
      </div>
    )
}