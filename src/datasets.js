import React from 'react';


export const DATASET = 'Dataset';

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
		"classes": ["scenes"],
        "problem_types": ["classification"],
        "website_url":"http://places.csail.mit.edu/index.html",
		"download_url": "http://places.csail.mit.edu/downloadData.html",
		"paper_url": "http://places.csail.mit.edu/places_NIPS14.pdf"
	}
]