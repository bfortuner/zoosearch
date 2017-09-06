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
export const MOBILENET = 'MobileNet'
export const INCEPTION = 'Inception'
export const FASTER_RCNN = 'Faster RCNN'
export const FAST_RCNN = 'Fast RCNN'
export const MASK_RCNN = 'Mask RCNN'
export const SSD = 'SSD'
export const RFCN = 'RFCN'



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
		],
        "description":"CNN trained on 205 scene categories of Places Database with ~2.5 million images",
		"dataset": "Places205",
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [c.NATURAL_SCENES],
		"paper_url": "http://places.csail.mit.edu/places_NIPS14.pdf"
	},
	{
		"title": "SSD MobileNet COCO",
		"type": c.MODEL,
        "architecture": SSD,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "http://download.tensorflow.org/models/object_detection/ssd_mobilenet_v1_coco_11_06_2017.tar.gz"
			},
		],
        "description": null,
		"dataset": c.MSCOCO,
		"class_labels": [],
        "problem_types": [c.OBJECT_DETECTION],
		"topics": [],
		"paper_url": null
	},
	{
		"title": "SSD Inception COCO",
		"type": c.MODEL,
        "architecture": SSD,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "http://download.tensorflow.org/models/object_detection/ssd_inception_v2_coco_11_06_2017.tar.gz"
			},
		],
        "description": null,
		"dataset": c.MSCOCO,
		"class_labels": [],
        "problem_types": [c.OBJECT_DETECTION],
		"topics": [],
		"paper_url": null
	},
	{
		"title": "RFCN Resnet101 COCO",
		"type": c.MODEL,
        "architecture": RFCN,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "http://download.tensorflow.org/models/object_detection/rfcn_resnet101_coco_11_06_2017.tar.gz"
			},
		],
        "description": null,
		"dataset": c.MSCOCO,
		"class_labels": [],
        "problem_types": [c.OBJECT_DETECTION],
		"topics": [],
		"paper_url": null
	},
	{
		"title": "Faster RCNN Resnet101 COCO",
		"type": c.MODEL,
        "architecture": FASTER_RCNN,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "http://download.tensorflow.org/models/object_detection/faster_rcnn_resnet101_coco_11_06_2017.tar.gz"
			},
		],
        "description": null,
		"dataset": c.MSCOCO,
		"class_labels": [],
        "problem_types": [c.OBJECT_DETECTION],
		"topics": [],
		"paper_url": null
	},
	{
		"title": "Faster RCNN Inception COCO",
		"type": c.MODEL,
        "architecture": FASTER_RCNN,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "http://download.tensorflow.org/models/object_detection/faster_rcnn_inception_resnet_v2_atrous_coco_11_06_2017.tar.gz"
			},
		],
        "description": null,
		"dataset": c.MSCOCO,
		"class_labels": [],
        "problem_types": [c.OBJECT_DETECTION],
		"topics": [],
		"paper_url": null
	},
	{
		"title": "Resnet101",
		"type": c.MODEL,
        "architecture": RESNET,
        "frameworks": [
			{
				"framework": TENSORFLOW,
				"url": "https://drive.google.com/file/d/0Byy2AcGyEVxfTmRRVmpGWDczaXM/view?usp=sharing"
			},
			{
				"framework": THEANO,
				"url": "https://drive.google.com/file/d/0Byy2AcGyEVxfdUV1MHJhelpnSG8/view?usp=sharing"
			},
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/resnet.py"
			},
			{
				"framework": KERAS,
				"url": "https://gist.github.com/flyyufelix/65018873f8cb2bbe95f429c474aa1294"
			}
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1512.03385"
	},
	{
		"title": "VGG16",
		"type": c.MODEL,
        "architecture": VGG,
        "frameworks": [
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/vgg.py"
			},
			{
				"framework": KERAS,
				"url": "https://keras.io/applications/#vgg16"
			}
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1409.1556"
	},
	{
		"title": "AlexNet",
		"type": c.MODEL,
        "architecture": ALEXNET,
        "frameworks": [
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/alexnet.py"
			},
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1404.5997"
	},
	{
		"title": "DenseNet",
		"type": c.MODEL,
        "architecture": DENSENET,
        "frameworks": [
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/densenet.py"
			},
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1608.06993"
	},
	{
		"title": "SqueezeNet",
		"type": c.MODEL,
        "architecture": SQUEEZENET,
        "frameworks": [
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/squeezenet.py"
			},
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1602.07360"
	},
	{
		"title": "Inception",
		"type": c.MODEL,
        "architecture": INCEPTION,
        "frameworks": [
			{
				"framework": PYTORCH,
				"url": "https://github.com/pytorch/vision/blob/master/torchvision/models/inception.py"
			},
		],
        "description": null,
		"dataset": c.IMAGENET,
		"class_labels": [],
        "problem_types": [c.CLASSIFICATION],
		"topics": [],
		"paper_url": "https://arxiv.org/abs/1409.4842"
	}
]


// 
// 
// 