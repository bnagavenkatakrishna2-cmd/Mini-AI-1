import React from "react";

type Props = {
pressed: boolean;
onPressedChange: (v: boolean) => void;
className?: string;
children?: React.ReactNode;
};

export default function Toggle({ pressed, onPressedChange, className = "", children }: Props) {
return (
<button
onClick={() => onPressedChange(!pressed)}
className={px-3 py-1 rounded-full border transition ${ pressed ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "bg-white dark:bg-slate-900" } ${className}}
>
{children ?? (pressed ? "On" : "Off")}
</button>
);
}
