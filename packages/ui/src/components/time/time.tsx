import { createDate, createDateNow } from "@solid-primitives/date";
import { Accessor, Component, createEffect, createMemo, mergeProps, on } from "solid-js";
import { timeStyle } from "./time.css";
import { MaybeAccessor, access } from "@solid-primitives/utils";



export type TimeProps = {
  twelveHour?: boolean;

  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
}

const formatTime = (date: Date, twelveHour: boolean = false, hours: boolean = true, minutes: boolean = true, seconds: boolean = false) => {
  const dateHours = date.getHours();

  const components: number[] = [];
  if(hours)
    components.push(twelveHour ? dateHours % 12 || 12 : dateHours);
  if(minutes) components.push(date.getMinutes());
  if(seconds) components.push(date.getSeconds());

  const formatted = components
    .map(part => part.toString().padStart(2, "0"))
    .join(" : ");

  return twelveHour ? `${formatted} ${dateHours >= 12 ? "PM" : "AM"}` : formatted;
}

export const Time: Component<TimeProps> = (props) => {
  const [now] = createDateNow(1000);

  return (
    <span class={timeStyle}>
      {formatTime(now(), false, true, true, true)}
    </span>
  )
}
