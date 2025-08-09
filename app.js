const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

/* -------------------- Home 组件 -------------------- */
const Home = {
  name: 'Home',
  setup() {
    const about = `I’m a graduate student in Educational Technology at Columbia University, with a background in Psychology and Education Science. I bring experience in HR coordination, user research, and content development, having supported recruitment, co-authored UX studies, and helped organize cross-cultural educational events. Skilled in Canva, video editing, and digital collaboration tools, I’m passionate about building people-centered systems and clear communication. I’m especially interested in roles at the intersection of HR, communications, and content strategy.`;

    const bullets = [
      '<strong>Recruitment & HR Tools:</strong> Interviewing, Onboarding, Event Coordination, Communication Strategy',
      '<strong>Technical & Research:</strong> HTML/CSS, JavaScript, Vue.js, Firebase, SPSS, Stata, Observational Coding',
      '<strong>UX & Communication:</strong> Wireframing, User Research, Cross-Cultural Facilitation, Microsoft Office, Google Workspace, Figma, Canva, Slack, Zoom '
    ];

    return { about, bullets };
  },
  template: `
    <div class="container section">
      <div class="card">
        <h2 style="margin-top:0">About</h2>
        <p>{{ about }}</p>
        <ul class="list">
          <li v-for="(b,i) in bullets" :key="i" v-html="b"></li>
        </ul>
      </div>

      <div class="section">
        <h2>Projects</h2>
        <div class="cta-grid">
          <router-link class="cta" to="/graduation-ip">
            <img src="https://i.postimg.cc/FK4RXxfk/istockphoto-1397150268-612x612.jpg">
            <h3>Graduation IP</h3>
            <p>Enhancing Cognitive Engagement: Redesigning a Short-Form Video App to Promote Deep Thinking in Short-Form Video Consumption</p>
            <span class="arrow">View Case →</span>
          </router-link>

          <router-link class="cta" to="/game-design">
            <img src="https://i.postimg.cc/7YRwwnRY/20250809154005.jpg">
            <h3>Game Design - The Recommendation Lab</h3>
            <p><br>Step into the future of AI decision</p></br>
            <br>
            <span class="arrow">View Case →</span>
            </br>
          </router-link>
        </div>
      </div>

      <div class="section">
        <div class="card grid grid-2">
          <div>
            <h3>Contact</h3>
            <p>Email: <a href="mailto:yg2948@tc.columbia.edu">yg2948@tc.columbia.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yeying-guo-6272682b5/" target="_blank" rel="noopener">www.linkedin.com/in/yeying-guo-6272682b5</a></p>
          </div>
          <div>
            <h3>Resume</h3>
            <p><a class="btn" href="https://drive.google.com/file/d/1qBRDO_uugdz9cKQbBFCOU1n7WdG9JG5m/view?usp=drive_link" target="_blank" rel="noopener">Open Resume PDF</a></p>
          </div>
        </div>
      </div>
    </div>
  `
};

/* -------------------- Graduation IP 子页 -------------------- */
const GraduationIP = {
  name: 'GraduationIP',
  setup() {
    const links = [
      { label: 'Design Document (PDF)', href: 'https://drive.google.com/file/d/1daoSZLZE32LgOVefX0zzHKHfHazm5ZH_/view?usp=drive_link' },
      { label: 'Prototype (High-Fidelity)', href: 'https://drive.google.com/file/d/1vViCVN6P9QKhQVUjT8sAY8avtAj-Njns/view?usp=drive_link' },
      { label: 'Video', href: 'https://drive.google.com/file/d/1ZNZWgg6kOXvf-3Whf-PuZEMgZFo0pqdk/view?usp=drive_link' },
      { label: 'UserFlow', href: 'https://drive.google.com/file/d/1D3H4EcJGLOvVGliBvScrC62WUl3MRqsG/view?usp=drive_link' }
    ];
    const highlights = [
      'Introduces scroll delays, reflection prompts, and diverse content to break automatic scrolling.',
      'Encourages critical thinking and reduces the effects of filter bubbles.',
      'Provides daily reviews and history to help users track viewing habits.',
      'Uses <strong>proven cognitive and behavioral principles</strong> to guide design.',
      'Keeps a familiar short-video interface while adding subtle engagement features.'
    ];
    return { links, highlights };
  },
  template: `
    <div class="container section">
      <p><router-link to="/">← Back</router-link></p>
      <div class="card">
        <img src="assets/ip-cover.jpg" style="border-radius:10px; margin-bottom:12px" alt="">
        <h2 style="margin:8px 0 0">Graduation IP — Promoting Deep Thinking in Short-Form Videos Consumption</h2>
        <p style="color:#a8b3bf; margin:6px 0 14px">Using UX Design to Encourage Deeper Cognitive Engagement in Short-Form Media</p>
        <div class="grid grid-2">
          <div>
            <h3>Highlights</h3>
           <ul class="list">
  <li v-for="(h,i) in highlights" :key="i" v-html="h"></li>
</ul>

          </div>
          <div>
            <h3>Links</h3>
            <div class="link-group">
              <a v-for="(l,i) in links"
   :key="i"
   class="link-pill link-pill--primary"
   :href="l.href" target="_blank" rel="noopener">
  {{ l.label }}
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

/* -------------------- Game Design 子页 -------------------- */
const GameDesign = {
  name: 'GameDesign',
  setup() {
    const links = [
      { label: 'Design Prototype (PDF)', href: 'https://drive.google.com/file/d/1TdwW1zpq_lugidc3dTlpty_D4fPH8mWB/view?usp=sharing' },
      { label: 'Video', href: 'https://drive.google.com/file/d/1tb9WQyhuUPcCnyWi6CSHLmKUhjJETmzs/view?usp=sharing' },
      { label: 'Theory Paper (PDF)', href: 'https://drive.google.com/file/d/1ZCc36_661mxuY9s_psOWTq7DexMQ7aZ-/view?usp=sharing' },
      { label: 'Game Manual', href: 'https://drive.google.com/file/d/1zGcBRDXlZlRKziH75eSrjdAcifM0YDMj/view?usp=sharing' },
      { label: 'Game Board', href: 'https://drive.google.com/file/d/1tq3F6NJt0IdU1NcsMS_ebNX1vRLW2vPL/view?usp=drive_link' }
    ];
    const highlights = [
      'Simulates platform operations by balancing user engagement, trust, and compliance.',
      'Diverse algorithms and event cards reflect real-world social and technical challenges.',
      'Multiple endings encourage reflection on the long-term impact of different strategies.',
      'Integrates media literacy and situated learning to foster critical thinking and ethical reasoning.',
      'Round-based gameplay with instant feedback supports reflection and strategy adjustment.'
    ];
    return { links, highlights };
  },
  template: `
    <div class="container section">
      <p><router-link to="/">← Back</router-link></p>
      <div class="card">
        <img src="assets/game-cover.jpg" style="border-radius:10px; margin-bottom:12px" alt="">
        <h2 style="margin:8px 0 0">Game Design (Group Project) — The Recommendation Lab</h2>
        <p style="color:#a8b3bf; margin:6px 0 14px">"A board game that teaches ethical and strategic decision-making in AI-driven recommendation systems through complexity, authenticity, and reflection."</p>
        <div class="grid grid-2">
          <div>
            <h3>Highlights</h3>
            <ul class="list"><li v-for="(h,i) in highlights" :key="i">{{ h }}</li></ul>
          </div>
          <div>
            <h3>Links</h3>
            <div class="link-group">
              <a v-for="(l,i) in links"
   :key="i"
   class="link-pill link-pill--primary"
   :href="l.href" target="_blank" rel="noopener">
  {{ l.label }}
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

/* -------------------- 路由配置 -------------------- */
const routes = [
  { path: '/', component: Home },
  { path: '/graduation-ip', component: GraduationIP },
  { path: '/game-design', component: GameDesign },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp({}).use(router).mount('#app');
