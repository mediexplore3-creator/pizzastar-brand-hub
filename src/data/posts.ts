export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Pizza Recipes' | 'Industry News' | 'Cooking Tips' | 'Food Trends';
  author: string;
  date: string;
  image: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'perfect-tandoori-paneer-pizza-at-home',
    title: 'How to Make the Perfect Tandoori Paneer Pizza at Home',
    excerpt: 'Love the smoky flavor of Tandoori Paneer? Learn how to recreate this Indian classic on a crispy pizza base without a professional tandoor.',
    category: 'Pizza Recipes',
    author: 'Chef Rajesh',
    date: 'Oct 24, 2026',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070',
    content: `
      <h2>The Magic of Tandoori Paneer: A Fusion Masterclass</h2>
      <p>There is nothing quite like the smoky, spicy, and charred flavor of Tandoori Paneer. When combined with the melting goodness of mozzarella and a tangy tomato base, it creates a pizza experience that is truly world-class. In this comprehensive guide, we will show you how to marinate your paneer and bake your pizza to perfection in a standard kitchen oven, bringing the soul of Old Delhi to your dinner table.</p>
      
      <h3>The Philosophy of Indian Fusion</h3>
      <p>Before we dive into the ingredients, let's talk about the 'why'. Indian fusion isn't just about throwing random spices on a pizza. It's about finding the balance between the acidity of the tomato sauce, the fat content of the paneer, and the aromatic profile of the tandoori masala. At Pizza Star, we believe the crust is our canvas and the local markets are our palette.</p>

      <h3>1. The Marination Secret: Depth of Flavor</h3>
      <p>The key to great tandoori paneer is the marinade. You need thick hung curd (Greek yogurt), ginger-garlic paste, kashmiri red chili powder for that vibrant color, and the essential Kasoori Methi (dried fenugreek leaves). If your marinades are watery, they will leak moisture during baking and ruin your crust. That's why we insist on using hung curd.</p>
      <ul>
        <li><strong>200g Paneer cubes:</strong> Use high-fat malai paneer for the best results.</li>
        <li><strong>1/2 cup Hung Curd:</strong> Essential for a thick, non-runny coating.</li>
        <li><strong>1 tsp Garam Masala:</strong> Homemade blends are always superior.</li>
        <li><strong>1 tsp Chaat Masala:</strong> For that essential tang.</li>
        <li><strong>Kasoori Methi:</strong> Crush it between your palms to release the oils.</li>
      </ul>
      
      <h3>2. Preparing the Dough: The Foundation</h3>
      <p>For an Indian fusion pizza, a medium-thin crust works best. It provides enough support for the heavy paneer toppings while staying crisp at the base. We recommend a hydration level of around 65% for home ovens. If you're in a high-humidity city like Mumbai, you might want to drop this to 62%.</p>
      
      <h3>3. The Tandoor Effect in a Kitchen Oven</h3>
      <p>How do we get that smoky char without a $5000 oven? The secret is in the preheating. You need to blast your oven at its highest setting for at least 45 minutes. If you have a pizza stone, use it. If not, use an inverted thick steel tray. The thermal mass is what creates the 'oven spring' and the crispy bottom.</p>

      <h3>4. Layering the Flavors</h3>
      <p>Don't just use plain mozzarella. Add a sprinkle of processed cheddar for that nostalgic Indian bakery feel. Use a spicy garlic chutney at the base before spreading the tomato sauce. This creates layers of heat that evolve as you chew.</p>

      <h3>5. The Finishing Touch</h3>
      <p>Once the pizza is out, don't cut it immediately! Let it rest for 60 seconds. This allows the paneer to settle and the cheese to finish its melt cycle. Garnish with fresh coriander and a squeeze of lemon to cut through the richness of the cheese.</p>

      <blockquote>"Pizza is the canvas, and Indian spices are the vibrant colors of our culinary heritage." - Pizza Star Brand Philosophy</blockquote>
      
      <p>Try this recipe today and let us know how your Star of Flavor turned out! Follow us on social media for more weekly fusion secrets.</p>
    `
  },
  {
    slug: 'indian-street-food-trends-2026',
    title: 'Top 5 Indian Street Food Trends Taking Over in 2026',
    excerpt: 'From Kulhad Pizza to Cheeseburst Momos, Indian street food is evolving faster than ever. Check out what is hot this year.',
    category: 'Food Trends',
    author: 'Amit Sharma',
    date: 'Oct 22, 2026',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974',
    content: `
      <h2>The Revolution of the Indian Palate: 2026 Edition</h2>
      <p>Indian street food has always been a kaleidoscope of flavors, but 2026 is seeing a shift from 'traditional snacks' to 'technological fusion'. From high-tech carts in Bengaluru to the viral earthen pots in Ahmedabad, the street landscape is unrecognizable compared to a decade ago.</p>
      
      <h3>1. Kulhad Everything: The Return to Earth</h3>
      <p>The earthen pot (Kulhad) is back in style, not just for tea. Whether it is chai, lassi, or the trending 'Kulhad Pizza', the earthy aroma adds a layer of authenticity that modern plastic and paper can't match. The porous nature of the clay helps maintain the temperature of the melted cheese, keeping it gooey for longer.</p>
      
      <h3>2. Vegan Street Bites: Consciously Desi</h3>
      <p>With more people choosing plant-based diets, veganized versions of Samosas and Kachoris are popping up everywhere from Mumbai to Bengaluru. Coconut milk-based chutneys and jackfruit-filled patties aren't just for the elite; they're becoming a staple of the common man's evening snacks.</p>

      <h3>3. The Fusion Frontier: Momos Meet Pizza</h3>
      <p>Why choose one when you can have both? Cheeseburst Momos with a pizza sauce dip are current the highest-selling street snack in Delhi's Lajpat Nagar. This trend highlights the adventurous nature of the Gen Z Indian consumer who craves novelty above all else.</p>

      <h3>4. Cloud Street-Kitchens</h3>
      <p>Hygiene is finally taking center stage. Street vendors are now using QR codes for ingredient transparency and using Pizza Star's mobile app to schedule 'street-side pickups'. It's a professionalization of a historically informal sector.</p>
      
      <h3>Conclusion: The Future is Flavorful</h3>
      <p>At Pizza Star, we don't just watch these trends; we participate in them. We keep a close eye on these street-side innovations to bring the best of the street to your mobile screen and your kitchen table. Stay tuned for our upcoming 'Street Fusion' limited edition menu.</p>
    `
  },
  {
     slug: 'unusual-pizza-toppings-india',
     title: 'Unusual Pizza Toppings You Have to Try in India',
     excerpt: 'Forget pineapple. From Chicken Butter Masala to Gajar Halwa (yes, really), these are the unconventional toppings making waves.',
     category: 'Food Trends',
     author: 'Priya Iyer',
     date: 'Oct 20, 2026',
     image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981',
     content: `<h2>Pushing the Boundaries of Taste</h2><p>India is a land of culinary innovation. Why should pizza be any different? While purists might cringe, the local palate is embracing experimental toppings that combine sweet, savory, and spicy in unexpected ways.</p><h3>1. Butter Chicken Delight</h3><p>Rich, creamy makhani gravy serving as the pizza sauce. Pieces of succulent chicken tikka topped with a drizzle of extra butter. It is heavy, it is calorie-rich, and it is absolute heaven.</p><h3>2. The Sweet Finale</h3><p>Dessert pizzas are becoming a staple. Chocolate brownies on a pizza are old news; try thin crusts topped with Rabri and crushed pistachios.</p><p>Join the conversation! What is the weirdest pizza you have ever had?</p>`
  },
  {
    slug: 'butter-chicken-pizza-sauce-secrets',
    title: 'The Secret to the Ultimate Butter Chicken Pizza Sauce',
    excerpt: 'Why settle for tomato paste when you can have a rich Makhani base? Learn the ratios for the perfect makhani pizza sauce.',
    category: 'Pizza Recipes',
    author: 'Chef Rajesh',
    date: 'Oct 18, 2026',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070',
    content: `<h2>Mastering the Makhani Base</h2><p>Traditional pizza sauce is great, but for an Indian fusion masterpiece, you need the richness of a Butter Chicken gravy. The trick is to make it thicker than a curry so it doesn't make the crust soggy.</p><h3>Ingredients</h3><ul><li>Pureed Tomatoes</li><li>Butter and Cream</li><li>Ginger-Garlic Paste</li><li>Honey or Sugar (for balance)</li></ul><p>Simmer the tomatoes until they lose all moisture, then fold in the cream. This concentrated flavor is what makes Pizza Star famous!</p>`
  },
  {
    slug: 'pizza-dough-indian-humidity',
    title: 'Working with Pizza Dough in Indian Humidity',
    excerpt: 'High humidity can ruin your dough. Here is how to adjust your hydration and fermentation for the Indian climate.',
    category: 'Cooking Tips',
    author: 'Amit Sharma',
    date: 'Oct 16, 2026',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070',
    content: `<h2>The Humidity Challenge</h2><p>In coastal cities like Mumbai or Chennai, dough behaves differently. High moisture in the air means your flour is already wetter than you think.</p><h3>Top Tips</h3><ul><li>Reduce water hydration by 2-3%</li><li>Use cold water from the fridge</li><li>Double your proofing time in the refrigerator (Cold Fermentation)</li></ul><p>Managing the climate is half the battle in the pursuit of the perfect crust.</p>`
  },
  {
    slug: 'the-rise-of-kulhad-pizza',
    title: 'The Viral Rise of Kulhad Pizza in Gujarat',
    excerpt: 'Is it really pizza? We explore the origins and the massive popularity of the earthen pot pizza phenomenon.',
    category: 'Food Trends',
    author: 'Priya Iyer',
    date: 'Oct 14, 2026',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935',
    content: `<h2>Earthen Aroma & Melting Cheese</h2><p>Gujarat has always been a hub for food innovation. The Kulhad Pizza—chopped pizza ingredients baked inside a clay pot—has taken social media by storm.</p><p>The clay absorbs excess moisture and adds a rustic "mitti" scent that you just can't get in a box. It is the ultimate fusion of tradition and fast food.</p>`
  },
  {
    slug: 'best-indian-cheese-for-pizza',
    title: 'Ranking the Best Indian Cheeses for the Perfect Pull',
    excerpt: 'Beyond Mozzarella: Which local cheeses can stand the heat of a wood-fired oven?',
    category: 'Cooking Tips',
    author: 'Chef Rajesh',
    date: 'Oct 12, 2026',
    image: 'https://images.unsplash.com/photo-1485962391945-447603448175?q=80&w=1974',
    content: `<h2>Finding the Perfect Melt</h2><p>While Mozzarella is the gold standard, Indian palates love a bit of tang. We experimented with Amul Processed Cheese, Kalari from Jammu, and even Chhena.</p><p>The winner? A 70:30 blend of low-moisture Mozzarella and aged processed cheese for that nostalgic "Indian Bakery" pizza flavor.</p>`
  },
  {
    slug: 'diwali-pizza-party-menu',
    title: 'Planning the Ultimate Diwali Pizza Party Menu',
    excerpt: 'Impress your guests this festive season with a Desi-Pizza fusion spread that beats the traditional snacks.',
    category: 'Industry News',
    author: 'Amit Sharma',
    date: 'Oct 10, 2026',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070',
    content: `<h2>Festival of Flavors</h2><p>This Diwali, swap the samosas for mini 'Achari' pizzas. They are easier to serve and much more exciting for the younger generation.</p><h3>Star Menu Suggestions</h3><ul><li>Achari Mushroom Sliders</li><li>Lamb Rogan Josh Flatbreads</li><li>Gulab Jamun Dessert Pizza</li></ul><p>Make your festival of lights a festival of bites!</p>`
  },
  {
    slug: 'healthy-millet-base-pizza',
    title: 'Healthy Pizza: Switching to Millet (Ragi) Bases',
    excerpt: 'The International Year of Millets may be over, but Ragi pizza bases are here to stay as a healthy alternative.',
    category: 'Pizza Recipes',
    author: 'Priya Iyer',
    date: 'Oct 08, 2026',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072',
    content: `<h2>Superfood on a Plate</h2><p>Ragi (Finger Millet) is naturally gluten-free and packed with calcium. While it is harder to stretch than wheat, it provides an incredible nutty flavor that pairs beautifully with spicy toppings like Andhra Chili Chicken.</p>`
  },
  {
    slug: 'monsoon-pizza-cravings-india',
    title: 'Why We Crave Spicy Pizza During the Indian Monsoon',
    excerpt: 'There is a scientific reason why tandoori spices and rain go so well together. Let us dive into the monsoon palate.',
    category: 'Industry News',
    author: 'Chef Rajesh',
    date: 'Oct 06, 2026',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=2070',
    content: `<h2>Rain, Spice, and Everything Nice</h2><p>In the humidity of the monsoon, our digestion slows down, and our bodies crave thermogenic spices like black pepper and chili. A piping hot Pizza Star with extra jalapeños and red chili flakes is the perfect answer to a Mumbai rain storm.</p>`
  },
  {
    slug: 'wood-fired-vs-electric-for-desi-pizza',
    title: 'Wood-fired vs. Electric: What is Best for Desi Pizza?',
    excerpt: 'Does the smoke really matter when you have heavy toppings like Tikka and Makhani? We put them to the test.',
    category: 'Cooking Tips',
    author: 'Amit Sharma',
    date: 'Oct 04, 2026',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070',
    content: `<h2>The Smoke Debate</h2><p>For simple Margherita, wood-fire is king. But for a Chicken Tikka Pizza, the marinated meat already has a smoky profile. We found that a high-powered electric deck oven often provides more consistency for thick-crust Indian pizzas.</p>`
  },
  {
    slug: 'homemade-pizza-sauce-desi-tomatoes',
    title: 'Making Pizza Sauce with Local Indian Tomatoes',
    excerpt: 'San Marzano is hard to find. Learn how to use local "Desi" and "Hybrid" tomatoes for a world-class sauce.',
    category: 'Pizza Recipes',
    author: 'Priya Iyer',
    date: 'Oct 02, 2026',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60705a013d?q=80&w=1974',
    content: `<h2>Local Hero: The Desi Tomato</h2><p>Indian tomatoes are more acidic and watery than Italian ones. The secret is to roast them first to concentrate the sugars and use a pinch of jaggery to balance the high acidity of the local produce.</p>`
  },
  {
    slug: 'star-pizza-app-features-2026',
    title: '5 Features of the Pizza Star App You Didn’t Know You Needed',
    excerpt: 'From AR pizza previews to real-time dough fermentation tracking, see what makes our app special.',
    category: 'Industry News',
    author: 'Amit Sharma',
    date: 'Sep 30, 2026',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
    content: `<h2>Technology Meets Taste</h2><p>Our app isn't just for ordering; it is a companion for the pizza lover. With the new 'Chef Mode', you can see exactly when your dough was kneaded and how long it has been proofing.</p>`
  },
  {
    slug: 'pizza-hydration-for-hot-climates',
    title: 'Optimizing Pizza Hydration for the Rajasthan Heat',
    excerpt: 'Dry heat in North India presents a unique challenge for bakers. Here is how to keep your crust from becoming a cracker.',
    category: 'Cooking Tips',
    author: 'Chef Rajesh',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1974',
    content: `<h2>Fighting the Dry Air</h2><p>In dry heat, your dough loses moisture to the air instantly. Increase your hydration to 70% and use a wet cloth to cover your dough at all times to avoid the dreaded "skin" from forming.</p>`
  },
  {
    slug: 'street-vs-gourmet-pizza-debate',
    title: 'Street Style vs. Gourmet: The Great Indian Pizza Debate',
    excerpt: 'Is the "Pizza Sandwich" from Ahmedabad better than a Neapolitan from Delhi? We look at both sides.',
    category: 'Food Trends',
    author: 'Priya Iyer',
    date: 'Sep 26, 2026',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070',
    content: `<h2>Two Worlds, One Love</h2><p>Street pizza in India is about indulgence—layers of cheese, spicy sauces, and soft bread. Gourmet pizza is about restraint. In 2026, the lines are blurring as gourmet chefs use street flavors like Vada Pav spices on their high-end sourdough.</p>`
  },
  {
    slug: 'indian-beverage-pizza-pairing',
    title: 'How to Pair Indian Beverages with Fusion Pizza',
    excerpt: 'Move over Soda. Learn why Masala Thums Up or Kokum Sherbet might be the better partner for your slice.',
    category: 'Industry News',
    author: 'Amit Sharma',
    date: 'Sep 24, 2026',
    image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=1974',
    content: `<h2>Regional Refreshments</h2><p>The high acidity of a Kokum Sherbet cuts through the richness of a Cheese Burst pizza perfectly. For spicier pizzas, the fizz and spice of a Masala Soda helps clear the palate between bites.</p>`
  },
  {
    slug: 'immunity-boosting-pizza-toppings',
    title: 'Pizza Toppings That Actually Boost Your Immunity',
    excerpt: 'From turmeric-infused crusts to garlic-rich toppings, pizza can be a powerhouse of wellness.',
    category: 'Cooking Tips',
    author: 'Chef Rajesh',
    date: 'Sep 22, 2026',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1974',
    content: `<h2>Wellness in Every Bite</h2><p>Adding raw garlic after baking preserves its allicin, a natural antibiotic. Our 'Golden Crust' uses turmeric and black pepper, which isn't just for color—it's an ancient health secret in a modern form.</p>`
  },
  {
    slug: 'fusion-pizza-party-etiquette',
    title: 'The Unofficial Rules of Fusion Pizza Etiquette',
    excerpt: 'To dip or not to dip in Mint Chutney? Addressing the big questions for your next social gathering.',
    category: 'Cooking Tips',
    author: 'Priya Iyer',
    date: 'Sep 20, 2026',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070',
    content: `<h2>The Desi Pizza Protocol</h2><p>In India, pizza is often shared as a communal snack alongside other dishes. It is perfectly acceptable (and encouraged!) to dip your crust in spicy Pudina chutney or even a bit of leftover Makhani gravy.</p>`
  },
  {
    slug: 'kolkata-pizza-scene-2026',
    title: 'Why Kolkata is Becoming the Hub of Experimental Pizza',
    excerpt: 'From Panch Phoron bases to Hilsa fish toppings, the City of Joy is reinventing the slice.',
    category: 'Food Trends',
    author: 'Amit Sharma',
    date: 'Sep 18, 2026',
    image: 'https://images.unsplash.com/photo-1619177383935-7bb8c97be23e?q=80&w=2070',
    content: `<h2>Culinary Creativity</h2><p>Kolkata has always been a city of intellectuals and foodies. The use of 'Kasundi' (mustard sauce) as a base layer for seafood pizzas is a trend that started in the lanes of Park Street and is now going global.</p>`
  },
  {
    slug: 'bangalore-craft-pizza-culture',
    title: 'Inside the Craft Pizza Culture of Bengaluru',
    excerpt: 'How the tech capital is using data and diverse palates to refine the artisanal pizza experience.',
    category: 'Food Trends',
    author: 'Chef Rajesh',
    date: 'Sep 16, 2026',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2070',
    content: `<h2>The Silicon Valley of Pizza</h2><p>Bengaluru’s brewpubs have paved the way for a vibrant 'Pizza & Sourdough' secondary industry. The focus here is on local ingredients—using Kodagu honey and farm-fresh cheeses from the outskirts of the city.</p>`
  },
  {
    slug: 'delhi-deep-dish-experiments',
    title: 'Delhi’s Deep Dish Experiments: Heavy, Hearty, and Bold',
    excerpt: 'Move over Chicago. Delhi’s version of the deep dish is packed with Tandoori Meats and local punch.',
    category: 'Food Trends',
    author: 'Priya Iyer',
    date: 'Sep 14, 2026',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070',
    content: `<h2>The Hearty North</h2><p>In Delhi, more is more. A typical 'Delhi Deep Dish' can weigh over 1kg, stuffed with marinated Soya Chaap or Mutton Keema. It is a meal for the brave and the hungry.</p>`
  },
  {
    slug: 'history-of-pizza-in-india',
    title: 'A Tasty Timeline: The History of Pizza in India',
    excerpt: 'From the early 90s to the fusion revolution of 2026. How we learned to love the slice.',
    category: 'Industry News',
    author: 'Amit Sharma',
    date: 'Sep 12, 2026',
    image: 'https://images.unsplash.com/photo-1590947116934-8d9981881514?q=80&w=2070',
    content: `<h2>From Foreign to Familiar</h2><p>Pizza arrived in India as an aspirational luxury. But it wasn't until the localized 'Paneer Tikka' topping was introduced that it truly became a staple of the Indian middle-class diet.</p>`
  },
  {
    slug: 'grow-your-own-pizza-herbs-india',
    title: 'Top 10 Pizza Herbs You Can Easily Grow on an Indian Balcony',
    excerpt: 'Fresh Basil and Oregano change everything. Here is your guide to a pizza kitchen garden.',
    category: 'Pizza Recipes',
    author: 'Priya Iyer',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070',
    content: `<h2>Balcony to Plate</h2><p>The'Thais' variety of basil grows better in Indian heat than traditional Genovese. Use localized potting soil and plenty of sunlight to have fresh toppings ready every weekend.</p>`
  },
  {
    slug: 'leftover-pizza-paratha-hacks',
    title: 'The Pizza-Paratha: Best Ways to Reheat Leftover Slices',
    excerpt: 'Don’t use the microwave! Use the Tawa for a "Stuffed Paratha" style crispy reheat.',
    category: 'Cooking Tips',
    author: 'Chef Rajesh',
    date: 'Sep 08, 2026',
    image: 'https://images.unsplash.com/photo-1606891001934-7dd7fa750fff?q=80&w=1974',
    content: `<h2>The Tawa Secret</h2><p>To revive a cold pizza, place it on a medium-hot Tawa (flat pan) with a drop of oil. Cover it for 2 minutes to melt the cheese while the bottom gets crunchier than it was when fresh.</p>`
  },
  {
    slug: 'gluten-free-millet-pizzas-india',
    title: 'Gluten-Free Innovation: The Power of Millet Pizza Bases',
    excerpt: 'Why Jowar and Bajra are becoming the preferred choice for health-conscious pizza lovers.',
    category: 'Pizza Recipes',
    author: 'Amit Sharma',
    date: 'Sep 06, 2026',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072',
    content: `<h2>The Millet Revolution</h2><p>Millets are ancient Indian grains that are naturally sustainable and healthy. When blent correctly, Bajra provides a smoky crust that complements grilled eggplant or roasted chicken perfectly.</p>`
  },
  {
    slug: 'spicy-chutney-pizza-dip-guide',
    title: 'Beyond Garlic Bread: The Ultimate Spicy Chutney Pizza Dip Guide',
    excerpt: 'From Thecha to Garlic Chutney. Your crusts deserve better than plain mayo.',
    category: 'Industry News',
    author: 'Priya Iyer',
    date: 'Sep 04, 2026',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1968',
    content: `<h2>Spice Up Your Slices</h2><p>A spicy Kolhapuri Thecha (green chili and peanut dip) adds a massive kick to a plain cheese pizza. For seafood pizzas, try a splash of Tangy Tamarind chutney for a sweet-sour contrast.</p>`
  },
  {
     slug: 'science-of-the-desi-cheese-pull',
     title: 'The Science of the Perfect "Desi" Cheese Pull',
     excerpt: 'How heat, fat content, and Indian weather affect that Instagram-worthy moment.',
     category: 'Cooking Tips',
     author: 'Chef Rajesh',
     date: 'Sep 02, 2026',
     image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070',
     content: `<h2>Elasticity & Excitement</h2><p>The perfect stretch comes from the alignment of protein strands in the cheese. Pro-tip: Wait exactly 60 seconds after taking the pizza out of the oven for the cheese to "set" slightly—that is when you get the longest pull.</p>`
  },
  {
    slug: 'hosting-pizza-workshop-at-home',
    title: 'How to Host a Successful Pizza-Making Workshop at Home',
    excerpt: 'Turn your Sunday brunch into a culinary masterclass for your friends and family.',
    category: 'Cooking Tips',
    author: 'Amit Sharma',
    date: 'Aug 30, 2026',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070',
    content: `<h2>Education & Eating</h2><p>Set up a topping station with bowls of paneer, corn, capsicum, and various sauces. Let everyone shape their own dough—mistakes are part of the fun and make the best memories.</p>`
  },
  {
    slug: 'star-pizza-sustainability-mission',
    title: 'Green Slices: Pizza Star’s Sustainability Mission in India',
    excerpt: 'Learn how we are eliminating single-use plastics and sourcing locally in 2026.',
    category: 'Industry News',
    author: 'Star Brand Team',
    date: 'Aug 28, 2026',
    image: 'https://images.unsplash.com/photo-1542601906960-daae19b4ef0b?q=80&w=1974',
    content: `<h2>Eco-Friendly Flavor</h2><p>Our pizza boxes are now 100% compostable and we've shifted to electric-only delivery bikes across all urban clusters. We believe a better world tastes better.</p>`
  },
  {
    slug: 'future-of-food-delivery-india-2027',
    title: 'Drones and Desi Food: The Future of Delivery in 2027',
    excerpt: 'Will your next Pizza Star arrive via an airborne drone? We look at the tech landscape.',
    category: 'Food Trends',
    author: 'Amit Sharma',
    date: 'Aug 26, 2026',
    image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=2070',
    content: `<h2>The Skyline of Service</h2><p>Delivery times are projected to drop to under 15 minutes as drone hubs become operational in major Indian cities. Pizza Star is at the forefront of this testing, ensuring your crust stays hot and your toppings stay put.</p>`
  }
];
