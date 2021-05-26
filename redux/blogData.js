const TEXTCHANGE = "TEXTCHANGE";
const TITLEHANGE = "TITLEHANGE";
const DATECHANGE = "DATECHANGE";
const ADDLIKE = "ADDLIKE";
const ADDOBJECT = "ADDOBJECT";
const CHANGEID = "CHANGEID";
const LIKECHANGE = "LIKECHANGE";

const initState = [];

const dataObject = {
    id: 0,
    data: "",
    modify_date: "",
    title: "",
    like: 0
  };

export const addObject = () => ({ type: ADDOBJECT });

export const blogDataChange = (index1 = 0, temp1 = "test") => ({
  type: TEXTCHANGE,
  index: index1,
  temp: temp1
});

export const blogTitleChange = (index1 = 0, temp1 = "test") => ({
  type: TITLEHANGE,
  index: index1,
  temp: temp1
});

export const blogDateChange = (index1 = 0, temp1 = "test") => ({
  type: DATECHANGE,
  index: index1,
  temp: temp1
});

export const blogIdChange = (index1 = 0, temp1 = "test") => ({
  type: CHANGEID,
  index: index1,
  temp: temp1
});

export const blogLikeChange = (index1 = 0, temp1 = 0) => ({
  type: LIKECHANGE,
  index: index1,
  temp: temp1
});

export const AddblogLike = (index1 = 0) => ({ type: ADDLIKE, index: index1 });

export default function blogData(state = initState, action) {
  let temp = [...state];

  console.log(state);

  switch (action.type) {
    case TEXTCHANGE:
      temp[action["index"]].data = action.temp;
      return temp;

    case TITLEHANGE:
      temp[action["index"]].title = action.temp;
      return temp;

    case DATECHANGE:
      temp[action["index"]].modify_date = action.temp;
      return temp;

    case ADDLIKE:
      temp[action["index"]].like = temp[action["index"]].like + 1;
      return temp;

    case ADDOBJECT:
      temp[temp.length] = { ...dataObject };
      return temp;

    case CHANGEID:
      temp[action["index"]].id = action.temp;
      return temp;

    case LIKECHANGE:
      temp[action["index"]].like = action.temp;
      console.log('temp');
      console.log(temp);
      return temp;

    default:
      return state;
  }
}
