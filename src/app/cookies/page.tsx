import LegalContent from "@/components/layout/LegalContent";

export const metadata = {
  title: "Cookie Policy | Pizza Star India",
  description: "How we use cookies to improve your brand experience.",
};

export default function CookiePolicyPage() {
  return (
    <LegalContent 
      title="Cookie Policy" 
      lastUpdated="Oct 2026"
    >
      <p>This Cookie Policy explains how Pizza Star ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at <span className="text-pizza-primary">pizzastarweb.netlify.app</span>.</p>
      
      <h2>What are cookies?</h2>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      
      <h2>Why do we use cookies?</h2>
      <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
      
      <h2>Types of Cookies we use:</h2>
      <ul>
        <li><strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website.</li>
        <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to its use.</li>
        <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used.</li>
        <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you and your interests.</li>
      </ul>
      
      <h2>How can I control cookies?</h2>
      <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies or other technologies, please email us at:</p>
      <p className="font-bold text-pizza-primary">officialpizzastar@gmail.com</p>

      <h2>Changes to this policy</h2>
      <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons.</p>
    </LegalContent>
  );
}
