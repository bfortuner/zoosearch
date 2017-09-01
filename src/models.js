import React from 'react';


export const MODEL = 'Model';

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
		"type": "Model",
        "architecture": "AlexNet",
        "framework":"Caffe",
        "description":"CNN trained on 205 scene categories of Places Database with ~2.5 million images",
		"dataset": "Places205",
		"classes": [],
        "problem_types": ["classification"],
        "website_url":"http://places.csail.mit.edu/index.html",
		"download_url": "http://places.csail.mit.edu/model/placesCNN.tar.gz",
		"paper_url": "http://places.csail.mit.edu/places_NIPS14.pdf"
	}
]