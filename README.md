Llamarama
=========

Are you a follower or a leader? Do you have what it takes to guide the
flock to llama-nirvana?

Game Play
---------

A heard of Llama walk through a 2D landscape fraught with danger
projected on a shared screen. Players connect on their phone via a
public web addresss and see one of the Llama on their phone screen
along with a set of commands ("dig" or "block" for example) to give to
the Llama. You only have a limited supply of each command and when you
give a command you instantly switch to another random Llama. Players
have to work together to get the flock home.


TL;DR Like multiplayer Lemmings where you can only control one at a
time and with Llama.

Design
------

Elements

    - Game server
    - World simulator
    - Main screen world visualiser
    - Phone screen controller
    - Network protocol

    
The world simulator runs the game simulation and should be able to run
within the browser or node. It should also be deterministic and
capable of importing and exporting state easily.

The Game Server runs the authoritative version of the World Simulator
and maybe also serves the HTML and JS for the Main Screen and Phone
Screen Controllers.

The main screen world visualiser displays the world with the Llama
moving within it. It gets its state from the world simulator.

The phone screen controller is just capable of showing a single Llama
and some controlers. It communicates with the Game Server to update
its version of the World Simulator.
