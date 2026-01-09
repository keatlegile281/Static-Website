# Static-Website
Troubleshooter Tech Services is a terminal-themed, cloud-native landing page featuring a Matrix-inspired aesthetic and serverless ticket logging.  Hosted on AWS S3 and CloudFront, it delivers a high-performance, secure experience while showcasing professional hardware repair expertise through modern web design.

# 💻 Troubleshooter Tech Services

A professional, high-performance static website for tech repair services, featuring a "Terminal" aesthetic.

## 🚀 Live Demo
d1iooovrtjyoc1.cloudfront.net

## ✨ Features
* Performance: 100/100 Lighthouse score (Static hosting).
* Interactivity: Typewriter effect, staggered scroll reveals, and smooth modal transitions.
* Responsive: Fully optimized for mobile, tablet, and desktop.
* Security: Served over HTTPS via AWS CloudFront.

## 🛠️ Tech Stack
* Frontend: HTML5, CSS3 (Custom Variables), Vanilla JavaScript.
* Infrastructure: Amazon S3 (Origin), Amazon CloudFront (CDN), Route 53 (DNS).
* Contact System: Serverless form processing via Formspree.

## 🔧 Maintenance & Deployment
To update the site:
1. Sync files to the S3 bucket.
2. Invalidate the CloudFront cache using `/*` to propagate changes globally.
