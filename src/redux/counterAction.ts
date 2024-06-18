type Action =
    | { type: "counter/minus", payload: number }
    | { type: "counter/plus", payload:number };

// type Action =
//     | { type: "counter/minus"}
//     | { type: "counter/plus"}

// type Action = { type: "counter/change"; payload: number };

export default Action;
