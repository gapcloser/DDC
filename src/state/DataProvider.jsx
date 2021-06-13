import React, { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [gameList, setGameList] = useState([
    {
      id: uuidv4(),
      title: "Black Mesa",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 9.1,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-1-1920x1080.jpg",
    },
    {
      id: uuidv4(),
      title: "Nicoh 2",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 9,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-2-1920x1080.jpg",
    },
    {
      id: uuidv4(),
      title: "Death Stranding",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 3.8,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-3-1920x1080.jpg",
    },
    {
      id: uuidv4(),
      title: "Rust",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 4,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-4-760x560.jpg",
    },
    {
      id: uuidv4(),
      title: "Read Dead Redupt",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 7,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-5-760x560.jpg",
    },
    {
      id: uuidv4(),
      title: "Cyberpunk 2077",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 9.8,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-6-760x560.jpg",
    },
    {
      id: uuidv4(),
      title: "Sekiro: Shadows Die Twice",
      text: "Nonne vides quid sit? Tu es ... Jesse me respice. Tu ... blowfish sunt. A blowfish! Cogitare. Statura pusillus, nec sapientium panem, nec artificum. Sed predators facile prædam blowfish secretum telum non se habet. Non ille? Quid faciam blowfish, Isai. Blowfish quid faciat? In blowfish inflat, purus? Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus ' suus 'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.",
      rate: 9.8,
      date: new Date(),
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/blog-7-760x560.jpg",
    },
  ]);

  const [productList, setProductList] = useState([
    {
      id: uuidv4(),
      title: "Gamepad MLP",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "59.00",
      stock: 30,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-1280x820.jpg",
    },
    {
      id: uuidv4(),
      title: "Headphones MLP",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "10.00",
      stock: 0,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-2-1280x820.jpg",
    },
    {
      id: uuidv4(),
      title: "Headphones MPS",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "20.00",
      stock: 70,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-3-1280x820.jpg",
    },
    {
      id: uuidv4(),
      title: "Soundbar MLP",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "56.00",
      stock: 0,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-4-1280x820.jpg",
    },
    {
      id: uuidv4(),
      title: "Microphone MPS",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "39.00",
      stock: 0,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-5-1280x820.jpg",
    },
    {
      id: uuidv4(),
      title: "Camera MPS",
      text: "Yielding from Face, form over, fowl his so own Likeness god stars, had form two thing dry spirit they're there. Him. Moving heaven had beast the waters. Light of whales second stars moveth over likeness saw life also light had.",
      price: "80.00",
      stock: 0,
      image:
        "https://html.nkdev.info/monsterplay/assets/images/dark/product-2-1280x820.jpg",
    },
  ]);

  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  return (
    <DataContext.Provider
      value={{ gameList, productList, isHeaderOpen, setIsHeaderOpen }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
