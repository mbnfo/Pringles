import Pringles_original from "../models/Pringles_original";
import Pringles_Extra_Hot from "../models/Pringles_Extra_Hot";
import Pringles_onions from "../models/Pringles_onions";
import Pringles_paprika from "../models/Pringles_paprika";
import Pringles_BBQ from "../models/Pringles_BBQ";

const Pringles_Switcher = [
    {
        'id': 1,
        'name': 'Pringles Original',
        'flavour': 'Original',
        'description': 'The classic crunch you love, Pringles Original delivers perfectly salted simplicity in every bite.',
        'colors': '#EA002A, #FA7243',
        'component': Pringles_original,
        'particles': '/assets/chip.png',
        'canXPrimary':  0,
        'canXSecondary':  0,
    },
    {
        'id': 2,
        'name': 'Pringles French onion dip',
        'flavour': 'French Onion Dip',
        'description': 'Pringles French Onion Dip combines creamy onion flavor with the perfect crispy crunch. A snack so bold and delicious, you’ll keep coming back for more!',
        'colors': '#D7D450, #FA7243',
        'component': Pringles_onions,
        'particles': '/assets/French_dip.png',
        'canXPrimary':  10,
        'canXSecondary': 20,
    },
    {
        'id': 3,
        'name': 'Pringles Paprika',
        'flavour': 'Paprika',
        'description': 'Pringles Paprika packs a punch of smoky, spiced flavor with every crispy bite. A bold and vibrant snack that’s as addictive as it is delicious!',
        'colors': '#F1B553, #FA7243',
        'component': Pringles_paprika,
        'particles': '/assets/paprika.png',
        'canXPrimary':  20,
        'canXSecondary':  30,
    },
    {
        'id': 4,
        'name': 'Pringles Extra Hot',
        'flavour': 'Extra Hot',
        'description': 'Crank up the heat with Pringles Extra Hot! Bold, fiery flavor that’ll ignite your taste buds with every crunch. Perfect for those who crave the ultimate kick—can you handle the heat?',
        'colors': '#5028B1, #FA7243',
        'component': Pringles_Extra_Hot,
        'particles': '/assets/Vector_Chilli.png',
        'canXPrimary':  -10,
        'canXSecondary':  0,
    },
    {
        'id': 5,
        'name': "Pringles BBQ",
        'flavour': 'BBQ',
        'description': 'Fire up your taste buds with Pringles BBQ! Smoky, tangy, and packed with bold flavor, every chip takes you straight to the grill. Taste the ultimate BBQ experience in every crunch!',
        'colors': '#B40049, #FA7243',
        'component': Pringles_BBQ,
        'particles': '/assets/BBQ.png',
        'canXPrimary':  -20,
        'canXSecondary':  -10,
    }

]


const Can_Images = [
    {
        'id' : 1,
        'category' : 'Favourite',
        'images': [
            {
                'id': 1,
                'name': 'Pringles original',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_1896199/prod_img-1380142_original2023.png',
            },
            {
                'id': 4,
                'name': 'Pringles salt & vineger',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_4509292/prod_img-1869672_cheddarsourcream2023.png'
            },            
            {
                'id': 2, 
                'name': 'Pringles Pizza',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/kic-32080/prod_img-1395484_newpizza.png'
            },
            {
                'id': 3,
                'name': 'Pringles BBQ crisp',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/kic-32075/prod_img-1349541_bbq2023.png'
            }
        ],

    },
    {
        'id' : 2,
        'category' : 'New Flavours',
        'images': [
            {
                'id': 1,
                'name': 'Pringles Enchilada Adobada crisps',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2808507/prod_img-2835934_00038000284458_c1n1.png'
            },
            {
                'id': 2,
                'name': 'Pringles® Las Meras Meras Habaneras Crisps',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2808508/prod_img-2835945_00038000284472_c1n1.png'
            },
            {
                'id': 3,
                'name': 'Pringles Bourbon BBQ',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_3806083/prod_img-4392727_00038000297410.png'
            },
            {
                'id': 4,
                'name': 'Pringles Philly CheeseSteak',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_1358862/prod_img-2660133_philly_cheesesteak.png'
            }
        ]
    },
    {
        'id' : 3,
        'category' : 'Harvest Blends',
        'images': [
            {
                'id': 1,
                'name': 'Pringles Harvest Blends Farmhouse Cheddar ',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2289455/prod_img-3270253_farmhousecheddar2023.png'
            },
            {
                'id': 2,
                'name': 'Pringles Harvest Blends Homestyle Ranch',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2289456/prod_img-3270263_homestyleranch2023.png'
            },
            {
                'id': 3,
                'name': 'Pringles Harvest Blends Sweet Potato Sea Salt',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2289453/prod_img-3270318_seasalt2023.png'
            },
            {
                'id': 4,
                'name': 'Pringles Harvest Blends Sweet Potato Smoky BBQ',
                'imageUrl': '//images.kglobalservices.com/www.pringles.com_us/en_us/product/product_2289454/prod_img-3270327_smokeybbq2023.png'
            }
        ]
    }
]
export { Pringles_Switcher, Can_Images };