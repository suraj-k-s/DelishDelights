-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 07:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_delish_delights`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(25) NOT NULL,
  `admin_email` varchar(20) NOT NULL,
  `admin_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(3, 'Karthik', 'karthik@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blog`
--

CREATE TABLE `tbl_blog` (
  `blog_id` int(11) NOT NULL,
  `blog_title` varchar(500) NOT NULL,
  `blog_image` varchar(500) NOT NULL,
  `blog_content` varchar(10000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `blog_time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_blog`
--

INSERT INTO `tbl_blog` (`blog_id`, `blog_title`, `blog_image`, `blog_content`, `user_id`, `blog_time`) VALUES
(14, '\n\"The History and Types of Pizza: A Guide to Making the Perfect Pie at Home\"', 'http://127.0.0.1:4000/images/pexels-narda-yescas-1566837.jpg', '<p>Pizza is one of the world\'s most popular foods, and for good reason. A delicious combination of crispy crust, gooey cheese, and savory toppings, pizza is a versatile dish that can be enjoyed by anyone, anywhere. In this blog, we will explore the history of pizza, the different types of pizza, and how to make the perfect pie at home.</p><p><br></p><p><strong>History of Pizza:</strong></p><p><br></p><p>Pizza has a long and fascinating history that dates back to ancient civilizations. The Egyptians, Greeks, and Romans all had some form of flatbread that was topped with herbs and cheese. However, the modern pizza that we know today originated in Naples, Italy in the 18th century. Neapolitan pizza was made with a tomato-based sauce, mozzarella cheese, and fresh basil, and it quickly became a popular street food in Naples.</p><p><br></p><p>As Italian immigrants began to settle in the United States in the late 19th and early 20th centuries, they brought their love of pizza with them. Today, pizza is a staple food in America, with countless variations and toppings.</p><p><br></p><p><strong>Types of Pizza:</strong></p><p><br></p><p>1. Neapolitan Pizza: Neapolitan pizza is the classic pizza of Naples, Italy. It has a thin, crispy crust, a tomato-based sauce, fresh mozzarella cheese, and fresh basil.</p><p><br></p><p>2. New York Style Pizza: New York style pizza has a thin, foldable crust that is crispy on the outside and chewy on the inside. It is typically larger than Neapolitan pizza and is topped with a variety of ingredients.</p><p><br></p><p>3. Chicago Style Pizza: Chicago style pizza is deep-dish pizza that is baked in a high-sided pan. It has a thick, buttery crust and is topped with a layer of cheese, followed by meat and vegetables, and then a layer of tomato sauce.</p><p><br></p><p>4. Sicilian Pizza: Sicilian pizza has a thick, fluffy crust that is topped with a rich tomato sauce and a generous amount of cheese.</p><p><br></p><p>How to Make the Perfect Pizza:</p><p><br></p><p><strong>Ingredients</strong>:</p><p>- 1 pound of pizza dough</p><p>- 1/2 cup of tomato sauce</p><p>- 2 cups of shredded mozzarella cheese</p><p>- Toppings of your choice (e.g. pepperoni, mushrooms, bell peppers, onions)</p><p><br></p><p><strong>Instructions</strong>:</p><p>1. Preheat your oven to 450°F.</p><p>2. Roll out the pizza dough on a floured surface to your desired thickness.</p><p>3. Transfer the dough to a lightly greased pizza pan or baking sheet.</p><p>4. Spread the tomato sauce over the dough, leaving a 1/2 inch border around the edge.</p><p>5. Sprinkle the shredded mozzarella cheese over the sauce.</p><p>6. Add your desired toppings.</p><p>7. Bake the pizza for 10-12 minutes, or until the crust is golden brown and the cheese is melted and bubbly.</p><p>8. Remove the pizza from the oven and let it cool for a few minutes before slicing and serving.</p><p><br></p><p>In conclusion, pizza is a delicious and versatile food that has been enjoyed for centuries. Whether you prefer a classic Neapolitan pizza or a deep-dish Chicago style pizza, there is a pizza out there for everyone. So, grab some dough and toppings, and make your own perfect pizza at home!</p>', 19, '2023-05-01'),
(15, '\"The Fluffy World of Pancakes: History, Types, and How to Make the Perfect Stack\"', 'http://127.0.0.1:4000/images/pexels-ash-376464.jpg', '<p>Pancakes are one of the most beloved breakfast foods around the world. From fluffy buttermilk pancakes in America to thin and crispy crepes in France, there are endless variations of this delicious treat. In this blog, we will dive into the history of pancakes, the different types of pancakes, and how to make the perfect stack at home.</p><p><br></p><p><strong>History of Pancakes:</strong></p><p><br></p><p>Pancakes have been around for centuries, and the first recorded pancake recipe dates back to ancient Greece. The Greeks made pancakes using wheat flour, olive oil, honey, and curdled milk. They cooked them on stones heated over a fire, and the resulting pancakes were thick and heavy.</p><p><br></p><p>As time passed, pancakes became popular throughout Europe, with each region developing its own style. In the UK, pancakes are thin and served with sugar and lemon juice, while in France, crepes are served with a variety of fillings, including Nutella, strawberries, and whipped cream.</p><p><br></p><p><strong>Types of Pancakes:</strong></p><p><br></p><p>1. Buttermilk Pancakes: Buttermilk pancakes are a classic American breakfast food. They are made with buttermilk, which gives them a tangy flavor and a fluffy texture. Serve them with butter and maple syrup for the ultimate breakfast treat.</p><p><br></p><p>2. Crepes: Crepes are thin, delicate pancakes that originated in France. They are usually filled with sweet or savory fillings, such as Nutella, fruit, cheese, or ham and eggs.</p><p><br></p><p>3. Dutch Baby Pancakes: Dutch Baby Pancakes, also known as German pancakes, are large, puffy pancakes that are baked in the oven. They are typically served with powdered sugar and lemon juice.</p><p><br></p><p>4. Japanese Pancakes: Japanese pancakes are thick, fluffy, and souffle-like. They are made with beaten egg whites and are often served with fruit and whipped cream.</p><p><br></p><p>How to Make the Perfect Pancakes:</p><p><br></p><p><strong>Ingredients:</strong></p><p>- 1 cup of all-purpose flour</p><p>- 2 tablespoons of sugar</p><p>- 2 teaspoons of baking powder</p><p>- 1/4 teaspoon of salt</p><p>- 1 cup of milk</p><p>- 1 egg</p><p>- 2 tablespoons of melted butter</p><p>- 1 teaspoon of vanilla extract</p><p><br></p><p><strong>Instructions:</strong></p><p>1. In a large bowl, whisk together the flour, sugar, baking powder, and salt.</p><p>2. In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract.</p><p>3. Pour the wet ingredients into the dry ingredients and whisk until just combined. The batter should be slightly lumpy.</p><p>4. Heat a non-stick pan over medium heat. Once hot, scoop 1/4 cup of batter onto the pan for each pancake.</p><p>5. Cook the pancakes for 2-3 minutes on each side, or until golden brown.</p><p>6. Serve the pancakes hot with butter and maple syrup.</p><p><br></p><p>In conclusion, pancakes are a delicious and versatile breakfast food that can be enjoyed in many different ways. Whether you prefer thick and fluffy pancakes or thin and crispy crepes, there is a pancake out there for everyone. So, whip up a batch of pancakes and enjoy a tasty breakfast at home.</p>', 19, '2023-05-01'),
(16, '\"The Sweet World of Cupcakes: History, Varieties, and Recipes\"', 'http://127.0.0.1:4000/images/pexels-daria-vasileva-552535.jpg', '<p>Cupcakes are the perfect little treats that bring joy to anyone with a sweet tooth. These miniature cakes are not only delicious but also come in endless varieties that cater to everyone\'s taste buds. In this blog, we will explore the history of cupcakes, different varieties, and a few easy recipes to make at home.</p><p><br></p><p><strong>History of Cupcakes:</strong></p><p><br></p><p>Cupcakes were first introduced in the United States in the late 19th century. Back then, cupcakes were made in teacups, which is where they got their name. The first recipe for cupcakes was published in 1828 in \"The American Cookery\" cookbook by Amelia Simmons.</p><p><br></p><p>Cupcakes gained popularity during the 20th century when cake mixes became widely available. With the invention of the electric mixer, making cupcakes became even easier, and people began to experiment with different flavors and decorations.</p><p><br></p><p><strong>Varieties of Cupcakes:</strong></p><p><br></p><p>1. Classic Vanilla Cupcakes: Vanilla cupcakes are the most traditional and popular variety. They are light, fluffy, and have a delicate vanilla flavor.</p><p><br></p><p>2. Chocolate Cupcakes: Chocolate cupcakes are a favorite for chocoholics. They are moist, rich, and have a deep chocolate flavor.</p><p><br></p><p>3. Red Velvet Cupcakes: Red velvet cupcakes have a distinct red color and a mild chocolate flavor. They are often topped with cream cheese frosting.</p><p><br></p><p>4. Lemon Cupcakes: Lemon cupcakes are bright and refreshing. They are light and fluffy and have a tangy lemon flavor.</p><p><br></p><p><strong>Easy Cupcake Recipes:</strong></p><p><br></p><p>1. Classic Vanilla Cupcakes:</p><p><br></p><p><strong>Ingredients:</strong></p><p>- 1 1/2 cups all-purpose flour</p><p>- 1 1/2 teaspoons baking powder</p><p>- 1/4 teaspoon salt</p><p>- 1/2 cup unsalted butter, softened</p><p>- 1 cup granulated sugar</p><p>- 2 large eggs</p><p>- 2 teaspoons vanilla extract</p><p>- 1/2 cup whole milk</p><p><br></p><p><strong>Instructions:</strong></p><p>1. Preheat the oven to 350°F and line a cupcake pan with paper liners.</p><p>2. In a medium bowl, whisk together the flour, baking powder, and salt.</p><p>3. In a separate bowl, cream the butter and sugar until light and fluffy.</p><p>4. Add the eggs one at a time, mixing well after each addition.</p><p>5. Add the vanilla extract and mix until combined.</p><p>6. Gradually add the dry ingredients to the wet ingredients, alternating with the milk, and mix until just combined.</p><p>7. Fill the cupcake liners 2/3 full with batter.</p><p>8. Bake for 18-20 minutes, or until a toothpick inserted into the center comes out clean.</p><p>9. Let the cupcakes cool in the pan for 5 minutes before transferring to a wire rack to cool completely.</p><p><br></p><p>2. Chocolate Cupcakes:</p><p><br></p><p><strong>Ingredients:</strong></p><p>- 1 cup all-purpose flour</p><p>- 1 cup granulated sugar</p><p>- 1/2 cup unsweetened cocoa powder</p><p>- 1 teaspoon baking powder</p><p>- 1/2 teaspoon baking soda</p><p>- 1/2 teaspoon salt</p><p>- 1/2 cup vegetable oil</p><p>- 2 large eggs</p><p>- 1 teaspoon vanilla extract</p><p>- 1/2 cup warm water</p><p><br></p><p><strong>Instructions:</strong></p><p>1. Preheat the oven to 350°F and line a cupcake pan with paper liners.</p><p>2. In a large bowl, whisk together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.</p><p>3. In a separate bowl, whisk together the oil, eggs, and vanilla extract.</p><p>4. Gradually whisk the wet ingredients into the dry ingredients until just combined.</p><p>5. Add the warm water and mix until smooth.</p><p>6. Fill the cupcake liners 2/3 full with</p>', 19, '2023-05-01'),
(29, '\"The Juicy World of Burgers: From Classic to Creative\"', 'http://127.0.0.1:4000/images/pexels-valeria-boltneva-1639557.jpg', '<p>Burgers have been a staple in American cuisine for decades. From fast food chains to gourmet restaurants, burgers have been reinvented time and time again. The juicy patty, sandwiched between two buns, has become a symbol of comfort food, indulgence, and culinary creativity. In this blog, we\'ll explore the world of burgers, from the classic to the creative.</p><p>Let\'s start with the classic burger. A classic burger consists of a beef patty, lettuce, tomato, onion, cheese, and a bun. It\'s simple, delicious, and timeless. But not all classic burgers are created equal. Some people prefer their burgers cooked medium-rare, while others prefer them well-done. The type of cheese used can also make a difference, whether it\'s American, cheddar, or Swiss. And let\'s not forget the bun. Some people prefer a soft bun, while others like it toasted or even brioche.</p><p>Moving on to the creative side of burgers, the possibilities are endless. One popular trend in recent years is the fusion burger, where different cuisines are combined to create a unique flavor profile. For example, a Korean BBQ burger might include a beef patty topped with kimchi, pickled vegetables, and gochujang sauce. Or a Mexican-inspired burger might have a beef patty topped with avocado, salsa, and queso fresco.</p><p>Another creative trend in burgers is the use of alternative proteins. Vegetarian and vegan burgers have become increasingly popular, made with ingredients like black beans, quinoa, and mushrooms. Some restaurants even offer burgers made from plant-based meat alternatives like Beyond Meat or Impossible Burger.</p><p>Finally, let\'s talk about toppings. Bacon, fried onions, jalapenos, and even peanut butter are just a few of the toppings that can take a burger to the next level. And let\'s not forget the sauces - ketchup and mustard are classic choices, but BBQ sauce, aioli, and even sriracha can add a flavorful kick.</p><p>In conclusion, burgers are a versatile and delicious food that can be enjoyed in so many different ways. Whether you prefer the classic burger or like to get creative with different flavors and toppings, there\'s a burger out there for everyone. So the next time you\'re craving a juicy patty, try something new and explore the world of burgers.</p>', 23, '2023-05-02'),
(30, 'Cookies', 'http://127.0.0.1:4000/images/pexels-valeria-boltneva-1639557.jpg', '<p>this is a mock data</p>', 19, '2023-05-03');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

CREATE TABLE `tbl_booking` (
  `booking_id` int(11) NOT NULL,
  `booking_date` varchar(10) NOT NULL,
  `booking_status` int(11) NOT NULL,
  `booking_amount` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `cart_id` int(11) NOT NULL,
  `cart_qty` int(11) NOT NULL,
  `cart_status` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'Veg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comment`
--

CREATE TABLE `tbl_comment` (
  `comment_id` int(11) NOT NULL,
  `comment_content` varchar(300) NOT NULL,
  `comment_date_time` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL DEFAULT 0,
  `blog_id` int(11) NOT NULL DEFAULT 0,
  `recipe_id` int(11) NOT NULL DEFAULT 0,
  `comment_rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_comment`
--

INSERT INTO `tbl_comment` (`comment_id`, `comment_content`, `comment_date_time`, `user_id`, `restaurant_id`, `blog_id`, `recipe_id`, `comment_rating`) VALUES
(1, 'Really Nice!', '2023-02-23', 1, 0, 0, 0, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, ' Thiruvananthapuram'),
(2, ' Kollam'),
(3, ' Pathanamtitta'),
(4, ' Alapuzha'),
(5, ' Kottayam'),
(6, ' Idukki'),
(7, 'Ernakulam'),
(8, 'Thrissur'),
(9, ' Palakkad'),
(11, ' Kozhikode'),
(12, ' Wayanad'),
(108, 'Malappuram'),
(109, 'Kannur'),
(110, 'Kasargode');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_food`
--

CREATE TABLE `tbl_food` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(30) NOT NULL,
  `food_rate` int(11) NOT NULL,
  `food_details` varchar(150) NOT NULL,
  `food_photo` varchar(500) NOT NULL,
  `restaurant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_caption` varchar(100) NOT NULL,
  `gallery_file` varchar(100) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`gallery_id`, `gallery_caption`, `gallery_file`, `recipe_id`, `restaurant_id`) VALUES
(3, 'Inside View', 'http://127.0.0.1:4000/images/pexels-brigitte-tohm-189536.jpg', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ingredients`
--

CREATE TABLE `tbl_ingredients` (
  `ingredients_id` int(11) NOT NULL,
  `ingredients_name` varchar(50) NOT NULL,
  `ingredients_quantity` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_ingredients`
--

INSERT INTO `tbl_ingredients` (`ingredients_id`, `ingredients_name`, `ingredients_quantity`, `recipe_id`) VALUES
(6, 'Chicken', 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_like`
--

CREATE TABLE `tbl_like` (
  `like_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_like`
--

INSERT INTO `tbl_like` (`like_id`, `user_id`, `blog_id`) VALUES
(74, 12, 14),
(75, 13, 14),
(76, 15, 14),
(87, 19, 30);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_menu`
--

CREATE TABLE `tbl_menu` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(20) NOT NULL,
  `menu_price` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_menu`
--

INSERT INTO `tbl_menu` (`menu_id`, `menu_name`, `menu_price`, `restaurant_id`, `category_id`) VALUES
(2, 'Desserts', 100, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(100) NOT NULL,
  `district_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `place_name`, `district_id`) VALUES
(53, ' Alamcode', 1),
(54, 'Attingal', 1),
(55, 'Kaniyapuram', 1),
(56, 'Kattakada', 1),
(57, 'Kilimanoor', 1),
(58, 'Konchiravila', 1),
(59, 'Kurakkanni', 1),
(60, 'Nedumangad', 1),
(61, 'Thiruvananthapuram', 1),
(62, 'Varkala', 1),
(63, 'Adinad', 2),
(64, 'Ampalamkunnu', 2),
(65, 'Ayoor', 2),
(66, 'Chathannoor', 2),
(67, 'Kadakkal', 2),
(68, 'Karunagappalli', 2),
(69, 'Kollam', 2),
(70, 'Kottarakkara', 2),
(71, 'Kottiyam', 2),
(72, 'Kulathupuzha', 2),
(73, 'Kundara', 2),
(74, 'Mukhathala', 2),
(75, 'Mylakkadu', 2),
(76, 'Nedungolam', 2),
(77, 'Nilamel', 2),
(78, 'Oachira', 2),
(80, 'Paravur', 2),
(81, 'Perumpuzha', 2),
(82, 'Pozhikara', 2),
(83, 'Punalur', 2),
(84, 'Punthalathazham', 2),
(85, 'St Thomas Fort', 2),
(86, 'Tangasseri', 2),
(87, 'Valiyode', 2),
(88, 'Vallikavu', 2),
(89, ' Adavi', 3),
(90, ' Adoor', 3),
(91, ' Kadapra', 3),
(92, ' Konni', 3),
(93, ' Kozhencherry', 3),
(94, ' Mallapally', 3),
(95, ' Pandalam', 3),
(96, ' Parumala', 3),
(97, ' Pathanamthitta', 3),
(98, ' Pullad', 3),
(99, ' Ranni', 3),
(100, ' Thiruvalla', 3),
(101, '  Vennikulam', 3),
(102, 'Alappuzha', 4),
(103, 'Ambalappuzha', 4),
(104, 'Arookutty', 4),
(105, 'Aroor', 4),
(106, 'Charummood', 4),
(107, 'Chengannur', 4),
(108, 'Cherthala', 4),
(109, 'Chettikulangara', 4),
(110, 'Haripad', 4),
(111, 'Kanjikuzhi', 4),
(112, 'Kayamkulam', 4),
(113, 'Kokkamangalam', 4),
(114, 'Kokkothamangalam', 4),
(115, 'Komalapuram', 4),
(116, ' Mannar', 4),
(117, ' Mararikulam North', 4),
(118, 'Mavelikkara', 4),
(119, 'Muhamma', 4),
(120, 'Nangiarkulangara', 4),
(121, 'Padanilam', 4),
(122, 'Pallickal', 4),
(123, ' Thumpoly', 4),
(124, ' Thuravoor', 4),
(125, ' Vellakinar', 4),
(126, 'Changanassery', 5),
(127, 'Erattupetta', 5),
(128, 'Ettumanoor', 5),
(129, 'Kanjirappally', 5),
(130, 'Kottayam', 5),
(131, 'Manarcaud', 5),
(132, 'Pala', 5),
(133, 'Pampady', 5),
(134, 'Parathanam', 5),
(135, 'Ponkunnam', 5),
(136, 'Ramapuram', 5),
(137, 'Teekoy', 5),
(138, 'Vaikom', 5),
(139, 'Adimali', 6),
(140, 'Cheruthoni', 6),
(141, ' Idukki', 6),
(142, ' Kattappana', 6),
(143, ' Kumily', 6),
(144, ' Marayur', 6),
(145, ' Munnar', 6),
(146, ' Murickassery', 6),
(147, ' Muthalakodam', 6),
(148, ' Nedumkandam', 6),
(149, ' Painavu', 6),
(150, ' Parathode', 6),
(151, ' Peermade', 6),
(152, ' Thekkady', 6),
(153, ' Thodupuzha', 6),
(154, ' Thopramkudy', 6),
(155, ' Udumbanchola', 6),
(156, ' Vandiperiyar', 6),
(157, 'Allapra', 7),
(158, 'Aluva', 7),
(159, 'Ambalamedu', 7),
(160, 'Ambalamugal', 7),
(161, 'Angamaly', 7),
(162, 'Arakkunnam', 7),
(163, 'Chembarakky', 7),
(164, 'Chendamangalam', 7),
(165, 'Chengamanad', 7),
(166, 'Cheranallur', 7),
(167, 'Cheruvattoor', 7),
(168, 'Choornikkara', 7),
(169, 'Chowwara', 7),
(170, 'Chowwera', 7),
(171, 'Edachira', 7),
(172, 'Edappally', 7),
(173, 'Edathala', 7),
(174, 'Eloor', 7),
(175, 'Ernakulam', 7),
(176, 'Irumpanam', 7),
(177, ' Kadamakkudy', 7),
(178, ' Kadayiruppu', 7),
(179, ' Kadungalloor', 7),
(180, ' Kakkanad', 7),
(181, ' Kalady', 7),
(182, ' Kalamassery', 7),
(183, ' Kanjoor', 7),
(184, ' Kaprikkad', 7),
(185, ' Keezhmad', 7),
(186, ' Kochi', 7),
(187, ' Kolenchery', 7),
(188, ' Koonammavu', 7),
(189, ' Koothattukulam', 7),
(190, ' Kothamangalam', 7),
(191, ' Kottuvally', 7),
(192, ' Kundannoor', 7),
(193, ' Kunnukara', 7),
(194, ' Kureekkad', 7),
(195, ' Malayattoor', 7),
(196, ' Malayidomthuruth', 7),
(197, ' Manjaly', 7),
(198, ' Maradu', 7),
(199, ' Mattoor', 7),
(200, ' Moolampilly', 7),
(201, ' Mulavukad', 7),
(202, ' Muvattupuzha', 7),
(203, ' Nayarambalam', 7),
(204, ' Nedumbassery', 7),
(205, ' Nedungad', 7),
(206, 'North Paravur', 7),
(207, 'Oorakkad', 7),
(208, 'Palliyangadi', 7),
(209, 'Pampakuda', 7),
(210, 'Payyal', 7),
(211, 'Perumbavoor', 7),
(212, 'Perumpadappu', 7),
(213, 'Pezhakkappilly', 7),
(214, 'Piravom', 7),
(215, 'Pizhala', 7),
(216, 'Ponjassery', 7),
(217, 'Pukkattupadi', 7),
(218, 'Puliyanam', 7),
(219, 'Thamarachal', 7),
(220, 'Thiruvankulam', 7),
(221, 'Thottakkattukara', 7),
(222, 'Thrippunithura', 7),
(223, 'Thuruthipilly', 7),
(224, 'Udayamperoor', 7),
(225, 'Varappuzha', 7),
(226, 'Vazhakkala', 7),
(227, 'Vazhakulam', 7),
(228, 'Venduvazhy', 7),
(229, 'Vengoor ', 7),
(230, 'Vyttila', 7),
(231, 'Adat', 8),
(232, 'Akathiyoor', 8),
(233, 'Alagappa Nagar', 8),
(234, 'Annamanada', 8),
(235, 'Arangottukara', 8),
(236, 'Attore North', 8),
(237, 'Attore South', 8),
(238, 'Avinissery', 8),
(239, 'Brahmakulam', 8),
(240, 'Chalakudy', 8),
(241, 'Chavakkad', 8),
(242, 'Chelakkara', 8),
(243, 'Chemmappilly', 8),
(244, 'Chevoor', 8),
(245, 'Guruvayur', 8),
(246, 'Harinagar Poonkunnam', 8),
(247, ' Iringaprom', 8),
(248, ' Irinjalakuda', 8),
(249, ' Kallamkunnu', 8),
(250, ' Kanimangalam', 8),
(251, ' Karuvannoor', 8),
(252, ' Kechery', 8),
(253, ' Kodakara', 8),
(254, ' Kodungallur', 8),
(255, ' Kolazhy', 8),
(256, ' Koratty', 8),
(257, ' Kottappuram', 8),
(258, ' Kottapuram', 8),
(259, ' Kunnamkulam', 8),
(260, ' Kuthiran', 8),
(261, ' Kuttur', 8),
(262, ' Mala', 8),
(263, ' Manaloor', 8),
(264, ' Marathakkara', 8),
(265, ' Methala', 8),
(266, ' Moonupeedika', 8),
(267, ' Mulakunnathukavu', 8),
(268, ' Mupliyam', 8),
(269, ' Nenmanikkara', 8),
(270, ' Palakkal', 8),
(271, ' Palayur', 8),
(272, ' Palissery', 8),
(273, ' Paluvai', 8),
(274, ' Pavaratty', 8),
(275, ' Perakam', 8),
(276, ' Perambra', 8),
(277, ' Peruvamkulangara', 8),
(278, ' Pottore', 8),
(279, ' Puranattukara', 8),
(280, ' Puthukkad', 8),
(281, ' Puzhakkal ', 8),
(282, 'Sangamagrama', 8),
(283, 'Thaikkad', 8),
(284, 'Thalapilly', 8),
(285, 'Thalore', 8),
(286, 'Thiruvalayannur', 8),
(287, 'Thrissur', 8),
(288, 'Triprayar', 8),
(289, 'Vadakkumkara', 8),
(290, 'Vadanappally', 8),
(291, 'Vallachira', 8),
(292, 'Varandarappilly', 8),
(293, 'Vellanikkara', 8),
(294, 'Venmanad', 8),
(295, ' Wadakkancherry', 8),
(296, ' Chandranagar', 9),
(297, ' Chittur-Thathamangalam', 9),
(298, 'Kaikatty', 9),
(299, 'Kakkayur', 9),
(300, 'Kanjikode', 9),
(301, 'Karuvanpadi', 9),
(302, 'Kesavanpara', 9),
(303, 'Kulappully', 9),
(304, 'Kumbidi', 9),
(305, 'Manissery', 9),
(306, 'Mankurussi', 9),
(307, 'Mannarkkad', 9),
(308, 'Marutharode', 9),
(309, 'Olavakkode', 9),
(310, 'Padinjarangadi', 9),
(311, 'Palakkad', 9),
(312, 'Palakkuzhi', 9),
(313, 'Palappuram', 9),
(314, 'Pathirippala', 9),
(315, 'Pattambi', 9),
(316, 'Puthur', 9),
(317, 'Shoranur', 9),
(318, 'Trikkatiri', 9),
(319, ' Vadakkencherry', 9),
(320, ' Vaniyamkulam', 9),
(321, ' Vazhempuram', 9),
(322, ' Walayar', 9),
(323, ' Aikkarappadi', 10),
(324, ' Alamkod', 10),
(325, ' Alattiyur', 10),
(326, ' Ananthavoor', 10),
(327, ' Angadipuram', 10),
(328, ' Areekode', 10),
(329, ' Ariyallur', 10),
(330, ' Athavanad', 10),
(331, ' Changaramkulam', 10),
(332, ' Chemmad', 10),
(333, ' Cheriyamundam', 10),
(334, ' Cherukara', 10),
(335, ' Cherukavu', 10),
(336, ' Chungathara', 10),
(337, 'Edakkara', 10),
(338, 'Edappal', 10),
(339, 'Edarikode', 10),
(340, 'Idimuzhikkal', 10),
(341, 'Irimbiliyam', 10),
(342, ' Kadampuzha', 10),
(343, ' Kakkad', 10),
(344, 'Kalady', 10),
(345, 'Kalikavu', 10),
(346, 'Karinkallathani', 10),
(347, 'Karipur', 10),
(348, 'Kavathikalam', 10),
(349, 'Kodur', 10),
(350, 'Kondotty', 10),
(351, 'Koottilangadi', 10),
(352, 'Kottakkal', 10),
(353, 'Kuttippuram', 10),
(354, 'Malappuram', 10),
(355, 'Mampad', 10),
(356, 'Mangalam', 10),
(357, 'Manjeri', 10),
(358, 'Mankada', 10),
(359, 'Maranchery', 10),
(360, 'Mongam', 10),
(361, 'Naduvattom', 10),
(362, 'Nannambra', 10),
(363, 'Nediyiruppu', 10),
(364, 'Neduva', 10),
(365, 'Nilambur', 10),
(366, 'Niramarutur', 10),
(367, 'Oorakam', 10),
(368, 'Othukkungal', 10),
(369, 'Pallikkal', 10),
(370, 'Pandikkad', 10),
(371, 'Parappanangadi', 10),
(372, 'Parappur', 10),
(373, 'Pattikkad', 10),
(374, 'Perinthalmanna', 10),
(375, 'Perumanna-Klari', 10),
(376, 'Peruvallur', 10),
(377, 'Ponmundam', 10),
(378, 'Ponnani', 10),
(379, 'Pudiyangadi', 10),
(380, 'Purathur', 10),
(381, 'Puthanathani', 10),
(382, 'Tanur', 10),
(383, 'Tenhipalam', 10),
(384, 'Tennala', 10),
(385, 'Thalakkad', 10),
(386, 'Thalappara', 10),
(387, 'Tirur', 10),
(388, 'Tirurangadi', 10),
(389, 'Valambur', 10),
(390, 'Valanchery', 10),
(391, 'Valiyakunnu', 10),
(392, 'Valluvambram Junction', 10),
(393, 'Vaniyambalam', 10),
(394, 'Vazhayur', 10),
(395, 'Veliyankode', 10),
(396, 'Vengara', 10),
(397, 'Wandoor', 10),
(398, 'Balussery', 11),
(399, ' Cheruvannur Nallalam', 11),
(400, 'Feroke', 11),
(401, ' Kinassery', 11),
(402, 'Koduvally', 11),
(403, 'Koodaranji', 11),
(404, 'Koyilandy', 11),
(405, 'Kozhikode', 11),
(406, 'Kunnamangalam', 11),
(407, 'Madappally', 11),
(408, 'Pantheeramkavu', 11),
(409, 'Perambra', 11),
(410, 'Poovaranthode', 11),
(411, 'Ramanattukara', 11),
(412, ' Thamarassery', 11),
(413, ' Thiruvambady', 11),
(414, ' Thottumukkam', 11),
(415, ' Vatakara', 11),
(416, ' Kalpetta', 12),
(417, ' Kayakkunn', 12),
(418, ' Mananthavady', 12),
(419, ' Meenangadi', 12),
(420, 'Padinharethara', 12),
(421, 'Panamaram', 12),
(422, 'Pulpally', 12),
(423, 'Sultan Bathery', 12),
(424, 'Alakode', 13),
(425, 'Anjarakkandy', 13),
(426, 'Anthoor', 13),
(427, 'Azhikode and Azhikkal', 13),
(428, 'Cheleri', 13),
(429, 'Cherukunnu', 13),
(430, 'Cherupuzha', 13),
(431, 'Cheruthazham', 13),
(432, 'Dharmadom', 13),
(433, 'Eranholi', 13),
(434, 'Eruvatti', 13),
(435, 'Ezhome', 13),
(436, 'Irikkur', 13),
(437, 'Iritty', 13),
(438, 'Iriveri', 13),
(439, 'Kadachira', 13),
(440, 'Kadannappalli', 13),
(441, 'Kadirur', 13),
(442, 'Kalliasseri', 13),
(443, 'Kandamkunnu', 13),
(444, 'Kanhirode', 13),
(445, 'Kannadiparamba', 13),
(446, 'Kannapuram', 13),
(447, 'Kannur', 13),
(448, 'Karivellur', 13),
(449, 'Keezhallur', 13),
(450, 'Kolachery', 13),
(451, 'Kolavelloor', 13),
(452, 'Koodali', 13),
(453, 'Kottayam-Malabar', 13),
(454, 'Kunhimangalam', 13),
(455, 'Kurumathur', 13),
(456, 'Kuthuparamba', 13),
(457, 'Kuttiattoor', 13),
(458, 'Madayi', 13),
(459, 'Manantheri', 13),
(460, 'Mangattidam', 13),
(461, 'Maniyoor', 13),
(462, 'Mattanur', 13),
(463, 'Mavilayi', 13),
(464, 'Mayyil', 13),
(465, 'Mokeri', 13),
(466, 'Narath', 13),
(467, 'Paduvilayi', 13),
(468, 'Panniyannur', 13),
(469, 'Panoor', 13),
(470, 'Pappinisseri', 13),
(471, 'Pariyaram', 13),
(472, 'Pathiriyad', 13),
(473, 'Pattiom', 13),
(474, 'Payyanur', 13),
(475, 'Pazhayangadi', 13),
(476, 'Peralasseri', 13),
(477, 'Peravoor', 13),
(478, 'Peringathur', 13),
(479, 'Pilathara', 13),
(480, 'Pinarayi', 13),
(481, 'Sreekandapuram', 13),
(482, 'Taliparamba', 13),
(483, 'Thalassery', 13),
(484, 'Bangramanjeshwar', 14),
(485, 'Bare', 14),
(486, 'Cherkala', 14),
(487, 'Cheruvathur', 14),
(488, 'Hosabettu', 14),
(489, 'Kanhangad', 14),
(490, 'Kasaragod', 14),
(491, 'Kunjathur', 14),
(492, 'Manjeshwar', 14),
(493, 'Nileshwaram', 14),
(494, 'Uppala', 14),
(495, 'Allapra', 0),
(496, 'Mannoor', 0),
(497, 'Mannoorr', 2),
(498, 'Varkala', 5),
(501, 'undefined', 0),
(502, 'undefined', 0),
(503, 'asdfgh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_recipe`
--

CREATE TABLE `tbl_recipe` (
  `recipe_id` int(11) NOT NULL,
  `recipe_title` varchar(20) NOT NULL,
  `recipe_details` varchar(200) NOT NULL,
  `recipe_video` varchar(200) NOT NULL,
  `recipe_status` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL,
  `recipe_photo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_recipe`
--

INSERT INTO `tbl_recipe` (`recipe_id`, `recipe_title`, `recipe_details`, `recipe_video`, `recipe_status`, `user_id`, `recipe_photo`) VALUES
(1, 'Coookiesss!!', 'Warm chocolate cookies', 'http://127.0.0.1:4000/images/Chocolate Chip Cookies Recipe.mp4', 1, 5, 'http://127.0.0.1:4000/images/pexels-brigitte-tohm-189536.jpg'),
(2, 'ddsffs', 'vffveafvf', 'http://127.0.0.1:4000/images/Chocolate Chip Cookies Recipe.mp4', 0, 2, 'http://127.0.0.1:4000/images/pexels-dapur-melodi-1109197.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_restaurant`
--

CREATE TABLE `tbl_restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `restaurant_name` varchar(25) NOT NULL,
  `restaurant_address` varchar(40) NOT NULL,
  `restaurant_contact` varchar(30) NOT NULL,
  `restaurant_email` varchar(20) NOT NULL,
  `restaurant_password` varchar(30) NOT NULL,
  `restaurant_photo` varchar(500) NOT NULL,
  `place_id` int(11) NOT NULL,
  `restaurant_status` int(11) NOT NULL,
  `restaurant_verification` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_restaurant`
--

INSERT INTO `tbl_restaurant` (`restaurant_id`, `restaurant_name`, `restaurant_address`, `restaurant_contact`, `restaurant_email`, `restaurant_password`, `restaurant_photo`, `place_id`, `restaurant_status`, `restaurant_verification`) VALUES
(11, 'Royal Bakeres', 'Near Grand mall,2nd floor,Muvattupuzha', '773652148', 'royal@gmail', '12345', 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0, 2, 0),
(16, 'Ceylon Bakers', 'Near Juma Masjid Perumbavoor', '798785125', 'Ceylon@gmail.com', '12345', 'http://127.0.0.1:4000/images/pexels-brett-sayles-1115251.jpg', 211, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subcategory`
--

CREATE TABLE `tbl_subcategory` (
  `subcategory_id` int(11) NOT NULL,
  `subcategory_name` varchar(25) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_subcategory`
--

INSERT INTO `tbl_subcategory` (`subcategory_id`, `subcategory_name`, `category_id`) VALUES
(3, 'Biriyani', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `user_contact` varchar(30) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_photo` varchar(500) NOT NULL,
  `user_status` int(11) NOT NULL DEFAULT 0,
  `place_id` int(11) NOT NULL,
  `user_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_contact`, `user_email`, `user_photo`, `user_status`, `place_id`, `user_password`) VALUES
(1, 'Varun', '7736368792', 'valid@gmail.com', 'hai', 0, 6, 'yooooo'),
(3, 'Manu', '8281472836', 'verified@gmail.com', 'http://127.0.0.1:4000/images/th.jpg', 0, 8, 'hehehhehe'),
(19, 'Abi Joy', '123456789', 'abi@gmail.com', 'http://127.0.0.1:4000/images/sm.jpeg', 0, 54, '12345'),
(21, 'Joy Boy', '9633867457', 'joyboy@gmail.com', 'http://127.0.0.1:4000/images/sm.jpeg', 0, 202, '12345'),
(23, 'Nandu Kishore', '123456789', 'nandu@gmail.com', 'http://127.0.0.1:4000/images/1.jpg', 0, 161, '12345'),
(24, 'Karthik Santhosh', '12345678', 'karthiksanthosh360@gmail.com', 'http://127.0.0.1:4000/images/1.jpg', 0, 211, '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_blog`
--
ALTER TABLE `tbl_blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_food`
--
ALTER TABLE `tbl_food`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `tbl_ingredients`
--
ALTER TABLE `tbl_ingredients`
  ADD PRIMARY KEY (`ingredients_id`);

--
-- Indexes for table `tbl_like`
--
ALTER TABLE `tbl_like`
  ADD PRIMARY KEY (`like_id`);

--
-- Indexes for table `tbl_menu`
--
ALTER TABLE `tbl_menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_recipe`
--
ALTER TABLE `tbl_recipe`
  ADD PRIMARY KEY (`recipe_id`);

--
-- Indexes for table `tbl_restaurant`
--
ALTER TABLE `tbl_restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Indexes for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  ADD PRIMARY KEY (`subcategory_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_blog`
--
ALTER TABLE `tbl_blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `tbl_food`
--
ALTER TABLE `tbl_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_ingredients`
--
ALTER TABLE `tbl_ingredients`
  MODIFY `ingredients_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_like`
--
ALTER TABLE `tbl_like`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `tbl_menu`
--
ALTER TABLE `tbl_menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `tbl_recipe`
--
ALTER TABLE `tbl_recipe`
  MODIFY `recipe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_restaurant`
--
ALTER TABLE `tbl_restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  MODIFY `subcategory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
