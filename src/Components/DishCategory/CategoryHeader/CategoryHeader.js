import React from 'react'

import './CategoryHeader.scss'

const categoryHeader = (props) => {
  let category = null
  let description = null

  switch (props.category) {
    case('Breakfast'):     
      category = "Breakfast"
      description = "The right snack can be a nutritious way to fuel your body and keep you energised between meals, and if they count towards one of your 5-a-day, even better! Check out my healthy snack recipes that not only taste great but are easy to make, too."
      break
    case('Snacks'):     
      category = "Snacks"
      description = "The right snack can be a nutritious way to fuel your body and keep you energised between meals, and if they count towards one of your 5-a-day, even better! Check out my healthy snack recipes that not only taste great but are easy to make, too."
    break
    case('Dinner'):     
      category = "Dinner"
      description = "Tucking into a dinner that’s packed with flavour and nutrients is a great way to bring a little joy to your day. From soups to quesadillas and spiced-up scrambled eggs, check out my healthy dinner recipes for easy, delicious ideas."
    break
    case('Desserts'):     
      category = "Desserts"
      description = "Make sure your dinners finish on a high note with my collection of delicious dessert recipes. Whether you’re looking for a classic crumble recipe, inspiration for a refreshing summer sorbet, or in need of a super-impressive celebration cake, we’ve got you covered."
    break
    case('Baking'):     
      category = "Baking"
      description = "The best baking recipes aren’t always the most impressive, most elaborate, highest-tiered cakes at the bake sale table. My favorite baking recipes from scratch are the ones we can easily bake at home, either solo or with friends."
    break
    case('Sauces'):     
      category = "Sauces"
      description = "Want to stop using packaged sauce mixes with the list of ingredients you can't even pronounce? With these recipes, you can learn to make easy sauces at home!"
    break
    case('Salads'):     
      category = "Salads"
      description = "These salad recipes are perfect for summer cookouts and easy family dinners, and are some of the best ways to use the season's delicious fruits and veggies."
    break
    case('Pizza'):     
      category = "Pizza"
      description = "My favorite homemade pizza recipes are cheesy, a little saucy, and topped with all kinds of fresh, seasonal produce."
    break
    case('Liquids'):     
      category = "Liquids"
      description = "If you need a cocktail, look no further. We've got recipes for blended drinks, hot chocolate, milkshakes and more. Bottoms up!"
    break
    default:
      return null
  }

  let header = 
    <div>
      <h1 style={{padding: "0px 100px", fontWeight: '400', marginTop: '80px', fontSize: '32px', fontFamily: 'Georgia', fontStyle: 'italic', color: 'black', marginBottom: '0px'}}>{category}</h1>
      <h5 style={{padding: "0px 60px", fontSize: '17px', color: '#776241', marginTop: '10px'}}>{description}</h5>
    </div>

  return (
    <div className='CategoryHeader'>
      {header}
    </div>
  )

}

export default categoryHeader
