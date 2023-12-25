import React from "react";

export type ILabel = {
    title: string
}

export const Label = React.memo<ILabel>(({ title }) => (
  <label className="block text-gray-700 text-sm font-bold mb-2">
    {title}
  </label>
));
