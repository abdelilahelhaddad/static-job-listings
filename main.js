const main = document.querySelector("#main");

const fetchJobs = async () => {
  await getJobs();
}

const getJobs = async () => {
  const url = "data.json";
  const res = await fetch(url);
  const data = await res.json();
  createJobs(data);
}

const createJobs = (job) => {
  for (let i = 0; i < job.length; i++) {
    const jobEl = document.createElement('div');
    jobEl.classList.add('box');
    jobEl.classList.add('container');

    const jobInnerHTML = `
  <img class="logo" src="${job[i].logo}" alt="">
  <div class="content">
    <div class="company mb">
      <span class="companyName">${job[i].company}</span>
      <p class="new">New!</p>
      <p class="featured">Featured</p>
    </div>
    <div class="position mb">
      <p>${job[i].position}</p>
    </div>
    <div class="postInfos mb">
      <p>${job[i].postedAt}</p>
      <p>${job[i].contract}</p>
      <p>${job[i].location}</p>
    </div>
  </div>
  <div class="tags">
    <span class="tagBg">Frontend</span>
    <span class="tagBg">Senior</span>
    <span class="tagBg">HTML</span>
    <span class="tagBg">CSS</span>
    <span class="tagBg">JavaScript</span>
  </div>
  `;

    jobEl.innerHTML = jobInnerHTML;
    main.appendChild(jobEl);
  }
}

fetchJobs();