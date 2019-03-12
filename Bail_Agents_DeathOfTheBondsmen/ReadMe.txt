Author: Shirsho Dasgupta
Date: December 10, 2018


Project: Death of the Bondsmen [Fall Final]


Summary: 
In August 2018, Gov. Jerry Brown signed a law completely abolishing the money bail system in California. The bill, supposed to come into effect in October next year, will put the 3,000 bail agents in the state out of work. 
The primarily web-text project takes a look at a prosperous industry suddenly faced with the prospect of extinction.
The project also uses an interactive map (created using Carto) and sticky images. 
Two other elements are described in detail below. 



Photogallery

The entire photogallery has five elements: one big display box, and four thumbnails.

Interactions:

1. When the cursor hovers over a thumbnail, a highlighted label fades in with the words "Click on image for audio". When the cursor leaves the space occupied by a thumbnail, the label disappears. This effect is triggered by the 'mouseenter' and 'mouseleave' functions.

2. When a thumbnail is clicked, four actions happen simultaneously:
   (a) The image in the display box changes to the image of the thumbnail that has 	
   	   been clicked. 
   (b) The caption in the display box changes to the caption attributed to the 
       thumbnail that has been clicked. 
   (c) The audio attached to each specific image starts playing.
   (d) The label changes from "Click on image for audio" to "Click to stop audio"
All of these actions is triggered by the 'click' function. 
The first two actions take place immediately. 
For the audio start/stop and change of label, a conditional statement is set up using two variables that read the audio file. If the file in both is the same, it means that the same audio is being played and the click puts a stop to the audio and changes the coinciding caption back to its initial state. If the file in both is different, it means that the user has clicked on a different thumbnail. In such an event, the initial audio stops playing and the new one starts and also the label for the initial photo changes back to "Click on image for audio" while that of the new one changes to "Click to stop audio"

3. The same function is preserved for mobile view with one exception: since it is not possible to hover on mobile, instead of having individual labels on each thumbnail there is a static label at the bottom of the gallery saying "Tap on thumbnail for audio". This label changes to "Tap to stop audio" when any audio clip is being played. 
One drawback to this feature is that the check on the monitor's width is performed through JQueries when the page is first loaded. So if one loads the page on a laptop in a really narrow screen and then stretches it to fit the whole monitor, there will appear beneath each thumbnail an unstyled box with the words "Click on image for audio". However such an event is extremely unlikely to happen in reality. 



Infogram

Interactions: 

1. When the cursor hovers over the thumbnail image, a label fades in with the words "Click to enlarge". When the cursor leaves the space occupied by a thumbnail, the label disappears. This effect is triggered by the 'hover' function.

2. When the image is clicked. A modal is triggered which displays a bigger and clearer image. 