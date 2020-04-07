let jobId;
let classId;
const data = [
  {
    week: '',
    monday: [],
    tuesday: [],
    wednessday: [],
    thursday: [],
    friday: [],
  },
];

const pullState = () => {
  jobId = Number(localStorage.getItem('jobId'));
  classId = Number(localStorage.getItem('classId'));
};

const setState = () => {
  localStorage.setItem('jobId', jobId.toString());
  localStorage.setItem('classId', classId.toString());
};

const getURLParams = () => {
  searchParams = new URLSearchParams(window.location.search);
  jobId = Number(searchParams.get('job'));
  classId = Number(searchParams.get('class'));
  setState();
};

const initState = () => {
  pullState();
  if (!jobId || !classId) {
    getURLParams();
    if (!jobId || !classId) {
      const getUrl = window.location;
      const baseUrl = getUrl.protocol + '//' + getUrl.host;
      window.location = `${baseUrl}/settings.html`;
    }
  }
};

const init = () => {
  initState();
};
