var store = [{
        "title": "Modules",
        "excerpt":"This course contains the following modules: Motivation Course objectives Robot Definition Robot Actuators and Effectors Robot Sensors Robot Computation and Communication Robot Design Assessment for Module 1 - Robot Definition and Components Robotic Fundamental Problems Physical models Sensing Planning Future of Robotics Assessment for Module 2 - Fundamental computational problems...","categories": [],
        "tags": [],
        "url": "/modules/index.html",
        "teaser": null
      },{
        "title": "Motivation",
        "excerpt":"In recent years, autonomous mobile robotics is increasingly becoming an effective way to carry out tasks that are difficult, dangerous, or simply boring for humans. Here a few examples, representative of some current trends. Exploration Space and ocean have been fascinating the human kind and multiple expeditions have been carried...","categories": [],
        "tags": [],
        "url": "/modules/0/motivation.html",
        "teaser": null
      },{
        "title": "Course objectives",
        "excerpt":"How do the robots seen in some of these applications work? This course will give you the basics in robotics to build a robotics system and software, through three learning modules. First, we will delve into the robot’s hardware. Second, we study computational problems that robots need to address. Third,...","categories": [],
        "tags": [],
        "url": "/modules/0/objectives.html",
        "teaser": null
      },{
        "title": "Robot Definition",
        "excerpt":"What are the robots that we have seen in the exciting applications made of? In this module we will discover the main hardware that defines a robot. What is a robot? The word robot was first used to represent a fictional humanoid by the Czech playwright Karel Čapek in a...","categories": [],
        "tags": [],
        "url": "/modules/1/robot-definition.html",
        "teaser": null
      },{
        "title": "Robot Actuators and Effectors",
        "excerpt":"Robots perform two main actions in the environment: locomotion and manipulation. Two main components are necessary: Effectors: a device that is controlled by a robot and that affects the environment. A number of them are available, depending on the specific task, as shown in the four examples below. Wheels Continuous...","categories": [],
        "tags": [],
        "url": "/modules/1/robot-action.html",
        "teaser": null
      },{
        "title": "Robot Sensors",
        "excerpt":"Sensors are devices to measure physical properties. They can be classified in two categories: Proprioceptive: measure properties of the robot itself. Exteroceptive: measure properties of the surrounding. Another categorization is determined by whether they emit energy into the environment – active sensors – or not – passive sensors. Here a...","categories": [],
        "tags": [],
        "url": "/modules/1/robot-sensors.html",
        "teaser": null
      },{
        "title": "Robot Computation and Communication",
        "excerpt":"Several choices are available for the computation devices processing the data from the sensors and sending commands to the actuators. Laptops can be a first choice for a powerful platform easy to use. In practice, other considerations are important, including cost, power usage, and size. In self-contained robots, roboticists dedicate...","categories": [],
        "tags": [],
        "url": "/modules/1/robot-computer.html",
        "teaser": null
      },{
        "title": "Robot Design",
        "excerpt":"What is important to consider when designing a robot? Compared to other fields, e.g., civil engineering, robotics is not mature yet and there are not widespread commercial tools to design a robot. Some initial attempts are being made by the research community to achieve robot design through computation, where according...","categories": [],
        "tags": [],
        "url": "/modules/1/robot-design.html",
        "teaser": null
      },{
        "title": "Assessment for Module 1 - Robot Definition and Components",
        "excerpt":"Robot Definition and Components This assignment is to help you self-assess your comprehension on the robot components. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 According to the current definition, a robot is 1. a reprogrammable, multifunctional manipulator designed to move material, parts, tools, or...","categories": [],
        "tags": [],
        "url": "/modules/1/assessment.html",
        "teaser": null
      },{
        "title": "Robotic Fundamental Problems",
        "excerpt":"How do we make a physical robot, seen in the previous module, autonomous? There are some fundamental problems that robotics software need to address: Models, i.e., the study of the motion, without forces. Sensing, i.e., perceive the surrounding. Planning, i.e., decide how to achieve a goal within the environment; a...","categories": [],
        "tags": [],
        "url": "/modules/2/robot-problems.html",
        "teaser": null
      },{
        "title": "Physical models",
        "excerpt":"With a mobile robot in hand with actuators and effectors, It is important to study how a robotics system moves so that we can understand how to create control software for a specific robot. Kinematics allows us to study the motion of the robot without considering forces, considering geometric models...","categories": [],
        "tags": [],
        "url": "/modules/2/models.html",
        "teaser": null
      },{
        "title": "Sensing",
        "excerpt":"We took a look at the models. In practice, the robot needs to sense the surrounding to purposefully act in the environment. In general, achieving robust sensing is a difficult problem, because: The sensing process might be indirect: it might not be possible to directly measure the quantity of interest....","categories": [],
        "tags": [],
        "url": "/modules/2/sensing.html",
        "teaser": null
      },{
        "title": "Planning",
        "excerpt":"With the sensor information, the robot can then act in the environment. We will discuss two important components necessary for the robot to move: control and planning. Control How can the robot achieve and maintain a desired state? The robot needs a controller that takes as input the desired state...","categories": [],
        "tags": [],
        "url": "/modules/2/planning.html",
        "teaser": null
      },{
        "title": "Future of Robotics",
        "excerpt":"In this module, the main takeaways are on what problems modeling, sensing, control, and planning are addressing and the main insights of the corresponding methods. You are very welcome to further expand on the topics. Each of the units can be a full course. None of the problems covered here...","categories": [],
        "tags": [],
        "url": "/modules/2/future-robotics.html",
        "teaser": null
      },{
        "title": "Assessment for Module 2 - Fundamental computational problems",
        "excerpt":"Fundamental computational problems This assignment is to help you self-assess your comprehension on the robot fundamental computational problems and approaches. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 The main elements for a kinematic model are: ____ state ____ action ____ forward kinematics ____ inverse...","categories": [],
        "tags": [],
        "url": "/modules/2/assessment.html",
        "teaser": null
      },{
        "title": "Robot Architecture",
        "excerpt":"In the first two modules, we have seen the robot hardware and the fundamental computational tasks that the robots need to solve together with some of the main algorithms. How do we combine all these different elements together to have an intelligent autonomous robot? How do we write software that...","categories": [],
        "tags": [],
        "url": "/modules/3/robot-architecture.html",
        "teaser": null
      },{
        "title": "Reactive control",
        "excerpt":"The simplest control architecture is just to react to sensory data, without doing any planning. This is called reactive system, as there is a direct mapping between sensors and effectors, and minimal state information. It does not plan. Sense act architecture. The diagram shows a single sense-action pair, but in...","categories": [],
        "tags": [],
        "url": "/modules/3/reactive.html",
        "teaser": null
      },{
        "title": "Deliberative control",
        "excerpt":"While reactive control reacts to sensor data, a deliberative control senses first, plans, and then executes the plan. The output of each step becomes the input of the following step. Sense plan act architecture. In this architecture, it is fundamental that the robot has all the elements we have seen...","categories": [],
        "tags": [],
        "url": "/modules/3/deliberative.html",
        "teaser": null
      },{
        "title": "Hybrid control",
        "excerpt":"The hybrid control architecture brings together the advantages of both the reactive and deliberative control architectures. In particular, it consists of three layers: a reactive layer where sensor readings are mapped to actuator commands, a planner that uses the information from the sensors to build the representation, and send actions,...","categories": [],
        "tags": [],
        "url": "/modules/3/hybrid.html",
        "teaser": null
      },{
        "title": "Middleware",
        "excerpt":"We have seen different control architectures and how from the high-level perspective they should interact with each other. Robots are complex systems that involve a large number of individual components that need to share information with each other. Modularity and reusability are key features to enable widespread development and use,...","categories": [],
        "tags": [],
        "url": "/modules/3/middleware.html",
        "teaser": null
      },{
        "title": "Assessment for Module 3 - Control architectures",
        "excerpt":"Control architectures This assignment is to help you self-assess your comprehension on the robot control architectures. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 A middleware 1. provides message passing interface for inter-process communication. 2. is a driver for robotics sensors. 3. is a library...","categories": [],
        "tags": [],
        "url": "/modules/3/assessment.html",
        "teaser": null
      },]
