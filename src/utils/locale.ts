export interface LOCALE_TYPE {
  monthNames: string[];
  dayNames: string[];
  today: string;
  year: string;
}

export const LOCALE = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
  year: "",

  // monthNames: [
  //   '1월',
  //   '2월',
  //   '3월',
  //   '4월',
  //   '5월',
  //   '6월',
  //   '7월',
  //   '8월',
  //   '9월',
  //   '10월',
  //   '11월',
  //   '12월',
  // ],
  // dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  // today: '오늘',
  // year: '년',
};
