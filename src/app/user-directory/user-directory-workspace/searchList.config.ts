import { SearchListConfiguration } from "@gsa-sam/layouts";

export const listConfig: SearchListConfiguration = {
    defaultSortValue: "userAscending",
    pageSize: 25,
    sortList:
      [
        { text: "Name (A-Z)", value: "userAscending" },
        { text: "Name (Z-A)", value: "userDescending" },
      ]
  };