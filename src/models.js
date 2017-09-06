import React from 'react';
import * as c from './constants.js';


// Frameworks
export const CAFFE = 'Caffe'
export const TENSORFLOW = 'Tensorflow'
export const KERAS = 'Keras'
export const PYTORCH = 'Pytorch'
export const TORCH = 'Torch'
export const THEANO = 'Theano'
export const LASANGE = 'Lasange'


// Architectures
export const VGG = 'VGG'
export const RESNET = 'Resnet'
export const DENSENET = 'DenseNet'
export const ALEXNET = 'AlexNet'
export const SQUEEZENET = 'SqueezeNet'



export const MODEL_DATA = [
	{
		"title": "Places205-AlexNet",
		"type": c.MODEL,
        "architecture": ALEXNET,
        "frameworks": [
			{
				"framework": CAFFE,
				"url": "http://places.csail.mit.edu/model/placesCNN.tar.gz"
			},
			{
				"framework": PYTORCH,
				"url": "http://places.csail.mit.edu/model/placesCNN.tar.gz"
			}
		],
        "description":"CNN trained on 205 scene categories of Places Database with ~2.5 million images",
		"dataset": "Places205",
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [c.NATURAL_SCENES],
		"paper_url": "http://places.csail.mit.edu/places_NIPS14.pdf"
	}
]