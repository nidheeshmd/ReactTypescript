import React from "react";

import { Greet } from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => { //extract prop type of one compoenet and use in other component
    return (
        <div>
            {props.name}
        </div>
    )
}