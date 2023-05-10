import gh from "./images/github.png";
import lc from "./images/leetcode.png";
import tw from "./images/twitter.png";
export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/anishsinhaa">
        <img src={gh} alt="GitHub" width="20px" />
      </a>

      <a href="https://leetcode.com/anishsinhaa/">
        <img src={lc} alt="LeetCode" width="20px" />
      </a>

      <a href="https://twitter.com/_anishsinha_">
        <img src={tw} alt="Twitter" width="20px" />
      </a>
    </footer>
  );
}
