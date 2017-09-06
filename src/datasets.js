import React from 'react';


export const DATASET = 'Dataset';

// Problem Types
export const COMPUTER_VISION = 'computer vision'
export const CLASSIFICATION = 'classification'
export const MULTILABEL = 'multi-label classification'
export const NLP = 'nlp'
export const SEGMENTATION = 'segmentation'
export const OBJECT_DETECTION = 'object detection'
export const SENTIMENT = 'sentiment'
export const KEYPOINT = 'keypoint'
export const LANDMARK = 'landmark'
export const FACE_DETECTION = 'face detection'


// Topics
export const BIOLOGY = 'biology'
export const HEALTHCARE = 'healthcare'
export const NEUROSCIENCE = 'neuroscience'
export const FINANCE = 'finance'
export const FACES = 'faces'
export const ANIMALS = 'animals'
export const NATURAL_SCENES = 'natural scenes'
export const PSYCHOLOGY = 'psychology'
export const SATELLITE = 'satellite'
export const AUTONOMOUS_CARS = 'autonomous cars'
export const SELF_DRIVING = 'self-driving cars'


// Datasets
export const IMAGENET = 'ImageNet'
export const PLACES205 = 'Places205'
export const CAMVID = 'CamVid'
export const MSCOCO = 'MSCoco'
export const PASCALVOC = 'PascalVOC'


// Classes and labels
export const DATASET_CLASSES = {
    IMAGENET:[],
    PLACES205:[],
    CAMVID:[],
    MSCOCO:[],
    PASCALVOC:[],
}


export const DATASET_DATA = [
    {
		"title": "Places205",
        "type": "Dataset",
        "description": `Scene recognition is one of the hallmark tasks of computer vision, allowing defining a context for object 
                        recognition. Here we introduce a new scene-centric database called Places, with 205 scene categories 
                        and 2.5 millions of images with a category label.`,
		"topic": [NATURAL_SCENES],
        "problem_types": [CLASSIFICATION],
        "website_url":"http://places.csail.mit.edu/index.html",
		"download_url": "http://places.csail.mit.edu/downloadData.html",
		"paper_url": "http://places.csail.mit.edu/places_NIPS14.pdf"
    },
    { 
        "title":"10k US Adult Faces Database",
        "type":DATASET,
        "description": `This database contains 10,168 natural face photographs and several measures for 2,222 of the faces, 
                       including memorability scores, computer vision and psychology attributes, and landmark point annotations.
                       The face photographs are JPEGs with 72 pixels/in resolution and 256-pixel height.`,
        "topic": [PSYCHOLOGY, FACE_DETECTION],
        "problem_type": [LANDMARK, SENTIMENT, FACE_DETECTION],
        "download_url":  "http://wilmabainbridge.com/facememorability2.html",
        "website_url":  "http://wilmabainbridge.com/facememorability2.html",
        "paper_url": "http://wilmabainbridge.com/papers/jepg-2013.pdf",
     },
    { 
        "title": "Cats vs Dogs",
        "type": DATASET,
        "description": "From the Kaggle Cats vs Dogs competition. The training archive contains 25,000 images of dogs and cats.",
        "topic": [ANIMALS],
        "problem_type": [CLASSIFICATION, COMPUTER_VISION],
        "download_url":  "https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition/data",
        "website_url":  "https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition/data",
        "paper_url": "",
    },
    { 
        "title": "Planet Amazon Rainforest",
        "type": DATASET,
        "description": `From the Kaggle Planet Amazon Rainforest competition. The training archive contains 100,000 satellite images 
                        of the Amazon rainforest of which 40K are annotated with one or more labels. Includes both JPG and TIF formats.`,
        "topic": [SATELLITE],
        "problem_type": [CLASSIFICATION, MULTILABEL, COMPUTER_VISION],
        "download_url":  "https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/data",
        "website_url":  "https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/data",
        "paper_url": "",
    },
    { 
        "title": "Audience Unfiltered faces for gender and age classification",
        "type": DATASET,
        "description": `In order to facilitate the study of age and gender recognition, we provide a data set and benchmark of face photos. 
                        The data included in this collection is intended to be as true as possible to the challenges of real-world imaging conditions. 
                        In particular, it attempts to capture all the variations in appearance, noise, pose, lighting and more, that can be expected 
                        of images taken without careful preparation or posing.`,
        "topic": [FACES],
        "problem_type": [COMPUTER_VISION, CLASSIFICATION],
        "download_url":  "http://www.openu.ac.il/home/hassner/Adience/data.html",
        "website_url":  "http://www.openu.ac.il/home/hassner/Adience/data.html",
        "paper_url": "",
     },
    { 
        "title": "Affective Image Classification",
        "type": DATASET,
        "description": `The International Affective Picture System (IAPS) is being developed to provide a set of normative emotional stimuli 
                        for experimental investigations of emotion and attention. The goal is to develop a large set of standardized, emotionally-evocative, 
                        internationally-accessible, color photographs that includes contents across a wide range of semantic categories.`,
        "topic": [PSYCHOLOGY],
        "problem_type": [COMPUTER_VISION, CLASSIFICATION, SENTIMENT],
        "download_url":  "http://csea.phhp.ufl.edu/media.html",
        "website_url":  "http://csea.phhp.ufl.edu/media.html",
        "paper_url": "http://www.imageemotion.org/machajdik_hanbury_affective_image_classification.pdf",
     },
    { 
        "title": "Animals with attributes",
        "type": DATASET,
        "description": `This dataset provides a plattform to benchmark transfer-learning algorithms, in particular attribute base classification. 
                        It consists of 30475 images of 50 animals classes with six pre-extracted feature representations for each image. The animals classes 
                        are aligned with Osherson's classical class/attribute matrix, thereby providing 85 numeric attribute values for each class. 
                        Using the shared attributes, it is possible to transfer information between different classes.`,
        "topic": [ANIMALS],
        "problem_type": [COMPUTER_VISION, CLASSIFICATION],
        "download_url":  "https://cvml.ist.ac.at/AwA/",
        "website_url":  "https://cvml.ist.ac.at/AwA/",
        "paper_url": "http://cvml.ist.ac.at/papers/lampert-cvpr2009.pdf",
     },
    { 
        "title": "Caltech Pedestrian Detection Benchmark",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type": [],
        "download_url":  "",
        "website_url":  "https://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/",
        "paper_url": "",
     },
    { 
        "title": "Chars74K dataset, Character Recognition in Natural Images (both English and Kannada are available)",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type": [],
        "download_url":  "",
        "website_url":  "http://www.ee.surrey.ac.uk/CVSSP/demos/chars74k/",
        "paper_url": "",
     },
    { 
        "title": "Face Recognition Benchmark",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type": [],
        "download_url":  "",
        "website_url":  "http://www.face-rec.org/databases/",
        "paper_url": "",
     },
    { 
        "title": "GDXray:  X-ray images for X-ray testing and Computer Vision",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type": [],
        "download_url":  "",
        "website_url":  "http://dmery.ing.puc.cl/index.php/material/gdxray/",
        "paper_url": "",
     },
    { 
        "title": "ImageNet (in WordNet hierarchy)",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type": [],
        "download_url":  "",
        "website_url":  "http://www.image-net.org/",
        "paper_url": "",
     },
    { 
        "title": "Indoor Scene Recognition",
        "type": DATASET,
        "description": "",
        "topic": [],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://web.mit.edu/torralba/www/indoor.html",
        "paper_url":"",
     },
    { 
        "title":"International Affective Picture System, UFL",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://csea.phhp.ufl.edu/media/iapsmessage.html",
        "paper_url":"",
     },
    { 
        "title":"Massive Visual Memory Stimuli, MIT",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://cvcl.mit.edu/MM/stimuli.html",
        "paper_url":"",
     },
    { 
        "title":"MNIST database of handwritten digits, near 1 million examples",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://yann.lecun.com/exdb/mnist/",
        "paper_url":"",
     },
    { 
        "title":"Several Shape-from-Silhouette Datasets",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://kaiwolf.no-ip.org/3d-model-repository.html",
        "paper_url":"",
     },
    { 
        "title":"Stanford Dogs Dataset",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://vision.stanford.edu/aditya86/ImageNetDogs/",
        "paper_url":"",
     },
    { 
        "title":"SUN database, MIT",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://groups.csail.mit.edu/vision/SUN/hierarchy.html",
        "paper_url":"",
     },
    { 
        "title":"The Action Similarity Labeling (ASLAN) Challenge",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.openu.ac.il/home/hassner/data/ASLAN/ASLAN.html",
        "paper_url":"",
     },
    { 
        "title":"The Oxford-IIIT Pet Dataset",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.robots.ox.ac.uk/~vgg/data/pets/",
        "paper_url":"",
     },
    { 
        "title":"Violent-Flows - Crowd Violence \ Non-violence Database and benchmark",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.openu.ac.il/home/hassner/data/violentflows/",
        "paper_url":"",
     },
    { 
        "title":"Visual genome",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://visualgenome.org/api/v0/api_home.html",
        "paper_url":"",
     },
    { 
        "title":"YouTube Faces Database",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.cs.tau.ac.il/~wolf/ytfaces/",
        "paper_url":"",
     },
    { 
        "title":"Context-aware data sets from five domains",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "https://github.com/irecsys/CARSKit/tree/master/context-aware_data_sets",
        "paper_url":"",
     },
    { 
        "title":"Delve Datasets for classification and regression (Univ. of Toronto)",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.cs.toronto.edu/~delve/data/datasets.html",
        "paper_url":"",
     },
    { 
        "title":"Discogs Monthly Data",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://data.discogs.com/",
        "paper_url":"",
     },
    { 
        "title":"eBay Online Auctions (2012)",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.modelingonlineauctions.com/datasets",
        "paper_url":"",
     },
    { 
        "title":"IMDb Database",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://www.imdb.com/interfaces",
        "paper_url":"",
     },
    { 
        "title":"Keel Repository for classification, regression and time series",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://sci2s.ugr.es/keel/datasets.php",
        "paper_url":"",
     },
    { 
        "title":"Labeled Faces in the Wild (LFW)",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://vis-www.cs.umass.edu/lfw/",
        "paper_url":"",
     },
    { 
        "title":"Lending Club Loan Data",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "https://www.lendingclub.com/info/download-data.action",
        "paper_url":"",
     },
    { 
        "title":"Machine Learning Data Set Repository",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://mldata.org/",
        "paper_url":"",
     },
    { 
        "title":"Million Song Dataset",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://labrosa.ee.columbia.edu/millionsong/",
        "paper_url":"",
     },
    { 
        "title":"More Song Datasets",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://labrosa.ee.columbia.edu/millionsong/pages/additional-datasets",
        "paper_url":"",
     },
    { 
        "title":"MovieLens Data Sets",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://grouplens.org/datasets/movielens/",
        "paper_url":"",
     },
    { 
        "title":"New Yorker caption contest ratings",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "https://github.com/nextml/caption-contest-data",
        "paper_url":"",
     },
    { 
        "title":"Registered Meteorites on Earth",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://healthintelligence.drupalgardens.com/content/registered-meteorites-has-impacted-earth-visualized",
        "paper_url":"",
     },
    { 
        "title":"Restaurants Health Score Data in San Francisco",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://missionlocal.org/san-francisco-restaurant-health-inspections/",
        "paper_url":"",
     },
    { 
        "title":"UCI Machine Learning Repository",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://archive.ics.uci.edu/ml/",
        "paper_url":"",
     },
    { 
        "title":"Yahoo! Ratings and Classification Data",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":[],
        "download_url": "",
        "website_url": "http://webscope.sandbox.yahoo.com/catalog.php?datatype=r",
        "paper_url":"",
     },
    { 
        "title":"Youtube 8m",
        "type":DATASET,
        "description":"",
        "topic":[],
        "problem_type":["computer vision", "classification", "video"],
        "download_url": "",
        "website_url": "https://research.google.com/youtube8m/download.html",
        "paper_url":"",
     },
]