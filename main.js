const cname = document.querySelector(".cname");

function createLinkSection() {
  var HTMLSection = document.createElement('div');
  HTMLSection.className = 'shorted';
  HTMLSection.innerHTML = `
    <a href="${url.value}" class="original-link">${url.value}</a>
    <div class="shorted-link-copy">
    <a href="${link.result.full_short_link}" class="shorted-link">${link.result.full_short_link}</a>
    <a href="#" id="copytext" dclass="btn btnCopy">Copy</a>
    </div>
  `;

  shortLinkSection.appendChild(HTMLSection);

  storeLink(url.value, link.result.full_short_link);
}

const jobsData = 'data.json';

async function getShorten() {
  try {
    const {
      data
    } = await axios(jobsData);
    createLinkSection(data);
  } catch (error) {
    console.log(error)
  }
}