import React from "react";
import { SariHeimannComp } from "./sariHeimann";
import { Esther } from "./esther";
import { SariStern } from "./SariStern";
import { Malky } from "./malky";
import { DvoraShechterComp } from "./DvoraShechter";
import { TamarHorn } from "./TamarH";
export const OurComponents = () => {
    return (
        <div>
            <h1>our project</h1>
            <SariHeimannComp></SariHeimannComp>
            <Esther></Esther>
            <SariStern></SariStern>
            <Malky></Malky>
            <DvoraShechterComp></DvoraShechterComp>
            <TamarHorn></TamarHorn>
      </div>
    )
}