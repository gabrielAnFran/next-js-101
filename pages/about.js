import headerStyles from "../styles/Header.module.css";

const about = () => {
  return (
    <div>
      <div className={headerStyles.description}>
        <div class="content-container">
          <h1 id="overview">Next.js and Azion</h1>
          <h2> Creating a function on Azion using the Next.js framework</h2>
          <p>
            When building a modern application, there are some issues to
            consider such as interface, infrastructure, performance, and so on.
            The Next.js1 framework is a flexible structure based on React® 2
            JavaScript library that provides tools for building fast web
            applications. Visit the React library and Next.js framework sites
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
