import { FeedPost } from "../../src/rrs-parser/Feed";

export const firstRssItem: FeedPost = {
  title: "Django vs Flask: Which is the Best Python Web Framework?",
  summary:
    "Overview Even if you are new to web development, you probably already know that there are two main web frameworks in the Python world: Django and Flask. According to the Python Developers Survey 2022 conducted by JetBrains, 39% of developers reported using either or both. Whether you are a beginner thinking of what to learn",
  link: "https://blog.jetbrains.com/pycharm/2023/11/django-vs-flask-which-is-the-best-python-web-framework/",
  publish: new Date(Date.UTC(2023, 10, 10, 13, 19, 28)),
};

export const rssData = `<?xml version="1.0" encoding="UTF-8"?> <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/" xmlns:media="http://search.yahoo.com/mrss/">

 <channel> <title>The JetBrains Blog</title> <atom:link href="https://blog.jetbrains.com/feed/" rel="self" type="application/rss+xml" /> <link>https://blog.jetbrains.com</link> <description>Developer Tools for Professionals and Teams</description> <lastBuildDate>Fri, 10 Nov 2023 17:12:45 +0000</lastBuildDate> <language>en-US</language> <sy:updatePeriod> hourly </sy:updatePeriod> <sy:updateFrequency> 1 </sy:updateFrequency>

 <image> <url>https://blog.jetbrains.com/wp-content/uploads/2023/02/cropped-icon-512-32x32.png</url> <title>The JetBrains Blog</title> <link>https://blog.jetbrains.com</link> <width>32</width> <height>32</height> </image> <item> <title>Django vs Flask: Which is the Best Python Web Framework?</title> <link> https://blog.jetbrains.com/pycharm/2023/11/django-vs-flask-which-is-the-best-python-web-framework/</link>

 <dc:creator><![CDATA[Denis Mashutin]]></dc:creator> <pubDate>Fri, 10 Nov 2023 13:19:28 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/Blog_Featured_image_1280x720-x2-1.png</featuredImage> <category><![CDATA[tools]]></category> <category><![CDATA[django]]></category> <category><![CDATA[flask]]></category> <category><![CDATA[frameworks]]></category> <category><![CDATA[python]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=pycharm&#038;p=403933</guid>

 <description><![CDATA[Overview Even if you are new to web development, you probably already know that there are two main web frameworks in the Python world: Django and Flask. According to the Python Developers Survey 2022 conducted by JetBrains, 39% of developers reported using either or both. Whether you are a beginner thinking of what to learn [&#8230;]]]></description> <content:encoded><![CDATA[ <h2 class="wp-block-heading">Overview</h2>

<p>Even if you are new to web development, you probably already know that there are two main web frameworks in the Python world: Django and Flask. According to the <a href="https://lp.jetbrains.com/python-developers-survey-2022/#FrameworksLibraries" target="_blank" rel="noreferrer noopener">Python Developers Survey 2022</a> conducted by JetBrains, 39% of developers reported using either or both.</p>

<div class="wp-block-image"> <figure class="aligncenter size-full"><img decoding="async" fetchpriority="high" width="2400" height="1032" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/web-frameworks.png" alt="Web frameworks by popularity among Python developers" class="wp-image-403934"/></figure></div>

<p>Whether you are a beginner thinking of what to learn to get your first job in web development, a developer looking for a framework to build a web application on, or a team lead considering various technologies for an upcoming project, this article should help you make the right choice.</p>

<p>Before diving deep, let’s take a look at the basic principles and “philosophies” of Django and Flask:</p>

<ul> <li>Flask is a microframework, while Django is an “all-inclusive” one. This means that you have more flexibility in choosing the tools you want to use in Flask, whereas Django has more essential features available out of the box.</li>

<li>Django enforces certain requirements on the project layout, but for a good cause, as this encourages developers to create applications with a clean and pragmatic design. Flask provides more freedom, though this may result in longer onboarding times for new team members.</li>

<li>Flask and Django are both free and open source.</li>

<li>Both frameworks have a large community, detailed documentation, and receive regular updates.</li> </ul>

<p>Now that we’ve covered the essentials, let’s compare Flask vs Django by looking at the various aspects and challenges of using each framework for web development.</p>

<h2 class="wp-block-heading">Templating system: Django templates vs Jinja2 templates</h2>

<p>If we only had to work with static HTML pages, that would be very easy, but most of today’s web applications include dynamic content. This is why we need a templating system.</p>

<p>Django has a built-in template engine, while Flask is fully compatible with Jinja2 templates.</p>

<figure class="wp-block-image size-full"><img decoding="async" width="2550" height="1232" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-vs-jinja2-template.png" alt="Django template vs. Jinja2 template" class="wp-image-403945"/></figure>

<p>Jinja2 was influenced by the Django template language. That’s why their syntax looks pretty similar. For example, both use double curly braces (<code>{{ }}</code>) for variables and curly braces with percent signs (<code>{% %}</code>) for logical elements, like loops and conditional statements.</p>

<p>At the same time, there are significant differences. Let’s look at these in more detail.</p>

<h3 class="wp-block-heading">Compatibility</h3>

<p>Django templates are tightly integrated with the Django framework. Some of their features, like template inheritance and template tags, are Django-specific.</p>

<p>Jinja2 is an independent template engine, compatible with various frameworks, including Django and Flask. That’s right: Although Django templates are the default choice for Django apps, you can use Jinja2 with Django, too! However, only 14% of Django developers do so, according to the <a href="https://lp.jetbrains.com/django-developer-survey-2022/" target="_blank" rel="noreferrer noopener">Django Developers Survey 2022</a>:</p>

<figure class="wp-block-image size-full"><img decoding="async" width="2400" height="656" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/template-engines-django.png" alt="Template engines used by Django developers" class="wp-image-403956"/></figure>

<p>PyCharm has time-saving features for both template engines. For example, you can use gutter icons to <a href="https://www.jetbrains.com/help/pycharm/navigating-between-templates-and-views.html" target="_blank" rel="noreferrer noopener">navigate from templates to views, and vice versa</a> – all in one click.</p>

<h3 class="wp-block-heading">Flexibility and complexity</h3>

<p>Jinja2 has a more complex syntax, while Django templates are less flexible and more restricted. There’s hardly any difference for basic applications, but you may face some limitations if you need to perform advanced operations in your templates.</p>

<p>For example, Jinja2 lets you define macros, which are reusable blocks of code:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">{% macro greeting(name) %} Hello, {{ name }}! {% endmacro %}

{{ greeting("Alice") }} {{ greeting("Bob") }}</pre>

<p>Other examples of more flexible syntax in Jinja2 include:</p>

<ul> <li>Mathematical operations.</li>

<li>Built-in filters for string formatting and manipulation.</li>

<li>The ability to assign variables.</li> </ul>

<p>The functionality of Django templates has been intentionally restricted, but for good reasons, including:</p>

<ul> <li>Separating application logic from representation.</li>

<li>Security: Prohibiting arbitrary code execution in templates helps to prevent injection attacks.</li>

<li>Keeping templates accessible for non-programmers, such as designers.</li> </ul>

<p>Both template engines allow you to create custom tags and filters. If you’re using PyCharm, you can benefit from its <a href="https://www.jetbrains.com/help/pycharm/custom-template-tags.html" target="_blank" rel="noreferrer noopener">support for custom template tags</a>.</p>

<h3 class="wp-block-heading">Extensions and customizations</h3>

<p>Many limitations in Django templates can be compensated by using additional libraries. However, it’s important to remember that any extra dependency may negatively affect your application’s performance and security. Here are some popular extensions for Django templates:</p>

<ol> <li><a href="https://django-crispy-forms.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">django-crispy-forms</a>: introduces the <code>|crispy</code> filter and the <code>{% crispy %}</code> tag to let you format Django forms easily and beautifully.</li>

<li><a href="https://pypi.org/project/django-widget-tweaks/" target="_blank" rel="noreferrer noopener">django-widget-tweaks</a>: adds the <code>{% render_field %}</code> tag for customizing form fields by using an HTML-like syntax and a bunch of template filters for tweaking form fields and CSS classes.</li>

<li><a href="https://django-ckeditor.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">django-ckeditor</a>: provides a WYSIWYG rich text editor so that your application’s users can add their own content as formatted text.</li> </ol>

<div class="wp-block-image"> <figure class="aligncenter size-full is-resized"><img decoding="async" loading="lazy" width="1366" height="846" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-ckeditor-rich-text-editor-field.png" alt="WYSIWYG rich text editor" class="wp-image-403967" style="width:600px"/></figure></div>

<p>In Jinja2, you can also import extensions for the sake of customization or even more sophisticated logic. For example, <a href="https://jinja.palletsprojects.com/en/3.0.x/extensions/#loop-controls" target="_blank" rel="noreferrer noopener">Loop Controls</a> adds support for <code>break</code> and <code>continue</code> in loops. The following loop will stop after processing 10 users from the <code>users</code> list:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">{% for user in users %} {%- if loop.index >= 10 %}{% break %}{% endif %} {%- endfor %}</pre>

<p>The <a href="https://jinja.palletsprojects.com/en/3.0.x/extensions/#debug-extension" target="_blank" rel="noreferrer noopener">Debug Extension</a> lets you use the <code>{% debug %}</code> tag in Jinja2 templates to explore the context without setting up a debugger.</p>

<p>By the way, PyCharm lets you <a href="https://www.jetbrains.com/help/pycharm/debugging-django-template-tutorial.html" target="_blank" rel="noreferrer noopener">debug Django templates without any extra tags</a>. Another great feature is the <a href="https://www.jetbrains.com/help/pycharm/live-preview-of-django-templates.html" target="_blank" rel="noreferrer noopener">real-time preview of Django templates</a>. The IDE renders templates as you edit them, so that you don’t need to switch to your browser.</p>

<h2 class="wp-block-heading">URL dispatcher</h2>

<p>URL dispatcher redirects incoming requests to specific views depending on the requested URL. Flask and Django handle this in different ways.</p>

<h3 class="wp-block-heading">Routing</h3>

<p>In Flask, routing is done by adding decorators to functions. Basically, here is how you create the application logic in Flask:</p>

<ol> <li>Describe the desired behavior in a Python function.</li>

<li>Decorate the function with <code>@app.route</code>.</li>

<li>Specify the URL pattern in the parameter of the decorator (for example, <code>@app.route(‘/’)</code>).</li> </ol>

<p>It’s as simple as that. Here’s the full code of a “Hello world” application in Flask:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">from flask import Flask

app = Flask(__name__)

@app.route('/') def hello_world(): return 'Hello World!'

if __name__ == '__main__': app.run()</pre>

<p>Django uses dedicated Python files (usually, <strong>urls.py</strong>) in order to match the requested URL with the corresponding view (piece of application logic). Views are written separately in <strong>views.py</strong>. To show a page with “Hello World!”, your application must include the following files:</p>

<ul> <li><strong>views.py</strong>: The app logic goes here.</li>

<li><strong>urls.py</strong>: The routing is done here.</li>

<li><strong>project’s urls.py</strong>: As Django is designed to have multiple applications in one project, you also need to include the URLs of the application in the project’s <strong>urls.py</strong> file.</li> </ul>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2518" height="1202" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-hello-world.png" alt="‘Hello World!’ in Django" class="wp-image-403978"/></figure>

<p>To launch the “Hello World” application in Django, you also need to perform a few preliminary steps:</p>

<ol> <li>Create a project.</li>

<li>Create an app.</li>

<li>Launch the Django server.</li> </ol>

<p>Thankfully, if you are working in PyCharm, all that is <a href="https://www.jetbrains.com/help/pycharm/creating-and-running-your-first-django-project.html#create-project" target="_blank" rel="noreferrer noopener">done automatically</a>. For more information about creating Django projects in PyCharm, follow our <a href="https://blog.jetbrains.com/pycharm/2023/04/create-a-django-app-in-pycharm/" target="_blank" rel="noreferrer noopener">Django app tutorial</a>.</p>

<p>So, here is where Flask’s minimalistic approach shines. Its routing system is simple and intuitive, which perfectly fits small projects, especially learning ones. You can create your first Flask app in a matter of minutes, or use PyCharm’s <a href="https://www.jetbrains.com/help/pycharm/creating-flask-project.html" target="_blank" rel="noreferrer noopener">Flask project template</a>, which includes a sample “Hello World” application.</p>

<p>In complex cases, Django will be able to offer more powerful and flexible routing. To compensate for Django’s challenging routing system, PyCharm features a dedicated <a href="https://www.jetbrains.com/help/pycharm/endpoints-tool-window.html" target="_blank" rel="noreferrer noopener">Endpoints tool window</a>.</p>

<h3 class="wp-block-heading">Handling URL parameters</h3>

<p>URL parameters are variable parts of the URL that are used to send additional information to the application. Both Flask and Django support positional and named parameters, as well as type converters.</p>

<p>One advantage of Django is that it allows using regular expressions in URL patterns with the help of the <code>re_path()</code> function:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">urlpatterns = [ re_path(r'^user/(?P&lt;username>\\w{0,50})/$', views.user_details), ]</pre>

<p>If you add such a pattern to your Django application, you’ll be able to request a URL, like <code>/user/john/</code>. The application will call the <code>user_details</code> function passing “<code>john</code>” as a parameter.</p>

<h3 class="wp-block-heading">Compliance with RESTful principles</h3>

<p>REST (Representational State Transfer) is an architectural style for web applications and services. Building web applications in accordance with REST principles is considered a best practice.</p>

<p>Flask enforces REST principles by design. It allows you to define routes for different HTTP methods separately.</p>

<p>In Django, views are associated with URL patterns regardless of the HTTP verb (GET, POST, PUT, DELETE, etc.). The subsequent differentiation is provided by the view, which is usually a class with the respective methods (<code>get()</code>, <code>post()</code>, <code>put()</code>, <code>delete()</code>, etc.):</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2354" height="1232" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-vs-flask-restful.png" alt="Flask vs. Django: handling HTTP methods" class="wp-image-403992"/></figure>

<p>This doesn’t mean that you can’t create a RESTful API in Django. <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer noopener">Django REST framework</a> is a package for developing web APIs that provides generic class-based views, a browsable API, serializers, and many other useful features. To build your first API in Django, follow our <a href="https://blog.jetbrains.com/pycharm/2023/09/building-apis-with-django-rest-framework/" target="_blank" rel="noreferrer noopener">DRF tutorial</a>.</p>

<h2 class="wp-block-heading">Working with databases</h2>

<p>Most web applications deal with data. Data is stored in databases, which are provided by different vendors. Let’s look at database support in Django and Flask.</p>

<p>Django has built-in Object Relational Mapping (ORM). ORM allows manipulating data in databases like objects in code. Django’s ORM supports PostgreSQL, MariaDB, MySQL, Oracle, and SQLite. Here’s what Django developers tend to choose, according to the <a href="https://lp.jetbrains.com/django-developer-survey-2022/" target="_blank" rel="noreferrer noopener">Django Developers Survey 2022</a>:</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2400" height="712" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-backends.png" alt="Databases most used by Django developers" class="wp-image-404046"/></figure>

<p>If you are going to store data in non-relational databases, like MongoDB or Redis, keep in mind that there is no native support for them in Django. According to the above survey, only 6% of developers use databases that are not officially supported by Django.</p>

<p>Another feature that facilitates database management in Django applications is the migration system. Django creates migrations automatically based on the changes you make to the application code, and then applies them to the connected database. Migrations are database-agnostic, can be put under version control, and allow for convenient rollbacks.</p>

<p>To work with migrations, the built-in <strong>manage.py</strong> utility is used. It provides a set of commands for managing migrations. PyCharm has a convenient <a href="https://www.jetbrains.com/help/pycharm/running-manage-py.html" target="_blank" rel="noreferrer noopener">manage.py console</a> with code completion, which makes operations with migrations easier.</p>

<p>What can Flask offer? Nothing is built in, but virtually anything can be implemented. You can, for example, use SQLAlchemy, Flask-Peewee, or Flask-Pony for ORM, or store your data in NoSQL databases with Flask-PyMongo, Flask-Cassandra, or Flask-Redis.</p>

<h2 class="wp-block-heading">Authentication and authorization</h2>

<p>Authentication means controlling who can access your web application, while authorization means providing specific permissions to those with access.</p>

<p>Django’s built-in authentication system handles both. It supports both users and user groups, and provides tools for granting and checking permissions. There are also a bunch of third-party packages for advanced authentication capabilities, including SSO, LDAP, and two-factor authentication.</p>

<p>Django also comes with an admin interface. The built-in admin app provides a ready-to-use interface for content management. After registering your models in <strong>admin.py</strong>, you’ll be able to perform CRUD (create, read, update, delete) operations on them.</p>

<p>A vast majority of developers who took part in the <a href="https://lp.jetbrains.com/django-developer-survey-2022/" target="_blank" rel="noreferrer noopener">Django Developers Survey</a> find <strong>admin</strong> and <strong>auth</strong> very useful:</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2400" height="1288" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-contrib-apps.png" alt="Most useful Django contrib apps" class="wp-image-404059"/></figure>

<p>To enable the admin app, add it to the list of installed apps in <strong>settings.py</strong> and provide a route for <em>‘</em><code>admin/</code><em>’</em> in <strong>urls.py</strong>. In PyCharm, Django admin is enabled by default and no additional steps are required. Just make sure that the <strong>Enable django admin</strong> checkbox is selected when <a href="https://helpserver.labs.jb.gg/help/pycharm/creating-and-running-your-first-django-project.html#create-project" target="_blank" rel="noreferrer noopener">creating your Django project</a>.</p>

<p>Being inherently lightweight, Flask doesn’t offer any authentication or authorization features out of the box. However, there are extensions that can be integrated into your Flask application and work well together. For example, Flask-Admin provides an admin interface combined with ORM support, while Flask-Login and Flask-Security add the essential authentication features.</p>

<p>The downside of such an approach is that these extensions are not part of Flask and have their own release cycles, which may result in backward compatibility issues.</p>

<h2 class="wp-block-heading">Testing</h2>

<p>Testing is an integral part of professional web development. Let’s see what the most popular web frameworks have to offer us for testing our web applications.</p>

<p>Both Django and Flask have built-in testing support compatible with the native Python’s unittest module. They also provide a test client for sending HTTP requests to the application.</p>

<p>One of the few differences lies in handling the databases during testing. If your tests involve database operations, Django will create separate test databases for them. In Flask, developers need to manually ensure that their production database is not affected by tests. Third-party extensions, like Flask-SQLAlchemy, can help with that.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2400" height="1096" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/test-frameworks-django.png" alt="Test frameworks most used by Django developers" class="wp-image-404071"/></figure>

<p>If you would like to benefit from advanced features of specialized testing libraries, such as <em>pytest</em>, you can use <a href="https://pytest-flask.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">pytest-flask</a> or <a href="https://pytest-django.readthedocs.io/en/latest/" target="_blank" rel="noreferrer noopener">pytest-django</a>.</p>

<p>To test the API of your web service or application, try PyCharm’s <a href="https://www.jetbrains.com/help/pycharm/http-client-in-product-code-editor.html" target="_blank" rel="noreferrer noopener">HTTP Client</a>. It lets you create and execute HTTP requests right in the code editor.</p>

<h2 class="wp-block-heading">Architecture</h2>

<p>As you may already know, there are two main styles in software architecture: the monolithic one and microservices.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2400" height="1370" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/monolithic-vs-microservice-1.png" alt="Monolith with Django vs Microservices with Flask" class="wp-image-404108"/></figure>

<p>Monolithic applications are ‘normal’ applications: They have a single codebase written in one programming language, are built and deployed as a single unit, and often have unified data storage.</p>

<p>Microservices architecture, on the other hand, involves developing a suite of small applications, where each unit is responsible for one thing and communicates with the others by means of an API. Every microservice has its own database, is deployed and scaled independently, and fails independently, without putting down the whole system.</p>

<p>Django encourages creating projects with several apps, where each app takes over a specific function. That might sound very similar to microservices, but it’s not. There’s still a single codebase and often a single database.</p>

<p>If you choose to develop with Django in PyCharm, you’ll always have access to a bird’s-eye view of the whole project structure in the <a href="https://www.jetbrains.com/help/pycharm/2023.3/django-structure-tool-window.html" target="_blank" rel="noreferrer noopener">Django Structure tool window</a>:</p>

<div class="wp-block-image"> <figure class="aligncenter size-full is-resized"><img decoding="async" loading="lazy" width="740" height="850" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/django-structure-tool-window.png" alt="Django Structure tool window" class="wp-image-404097" style="aspect-ratio:0.8705882352941177;width:300px;height:auto"/></figure></div>

<p>Flask, the microframework, seems to be a perfect choice for microservices. With Flask, you can easily create a bunch of lightweight apps, empowering each with only the tools and extensions it requires. Full compliance with RESTful principles will also be a great help in establishing stateless connections between the microservices.</p>

<p>Django can be used in exactly the same way, although in this case the components of the system will be not so compact because of Django’s “batteries included” philosophy. But as long as you can use any stack for each particular microservice, you might as well develop a Django one when you need some Django-specific capabilities.</p>

<h2 class="wp-block-heading">Learning curve</h2>

<p>Django is a complete framework, which results in a more challenging learning curve. On the other hand, you don’t need to learn anything besides Django. Everything a newbie usually needs, like ORM, authentication, authorization, and more, is already available in the main package, which comes with extensive documentation.</p>

<p>A Flask application can be created in seconds by writing just a few lines of code in a single file. So, if you are looking for a quick start, Flask may be a better choice. However, you have to be ready to explore extensions and other packages if you decide to develop your project further.</p>

<p>At the same time, Django projects tend to have more concise and consistent architecture. This results in shorter onboarding times when developers join already running projects.</p>

<p>From a team lead’s perspective, it’s also very important to take into account the needs and capabilities of your team.</p>

<h2 class="wp-block-heading">Conclusion</h2>

<h3 class="wp-block-heading">At the end of the day, should you use Flask or Django?</h3>

<p>It’s really difficult to say which Python web framework is better, let alone the best.</p>

<p>Both Django and Flask are equally suitable for many different tasks, but there are also so many aspects in which they differ. Every developer will make their own decision as to which framework to use, taking into account their skills, goals, and the nature of the projects they’re working on.</p>

<p>The table below summarizes all the points made in the article:</p>

<figure class="wp-block-table is-style-stripes"><table class="has-fixed-layout"><thead><tr><th></th><th>Django</th><th>Flask</th></tr></thead><tbody><tr><td><strong>Templates</strong></td><td>Django template language:<br> <ul> <li>Django-specific</li> <li>Syntax is restricted to encourage best practices</li> <li>Readable by non-programmers</li> <li>Extensions are available</li> </ul> </td><td>Jinja2:<br> <ul> <li>Compatible with many web frameworks</li> <li>Syntax allows performing operations in the template</li> <li>Extensions are available</li> </ul> </td></tr><tr><td><strong>URLs</strong></td><td> <ul> <li>Routing is more complicated but extremely powerful</li> <li>Regexes can be used to capture URL parameters</li> <li>Not fully RESTful-compliant</li> </ul> </td><td> <ul> <li>Simplified routing, perfect for a quick start</li> <li>Routes and logic are written in one file</li> <li>RESTful-compliant</li> </ul> </td></tr><tr><td><strong>Databases</strong></td><td> <ul> <li>Built-in ORMs</li> <li>Difficult to use unsupported databases</li> </ul> </td><td> <ul> <li>ORM support via extensions</li> <li>NoSQL databases can be used</li> </ul> </td></tr><tr><td><strong>Authentication and authorization</strong></td><td>Built-in apps: <ul> <li>Django auth</li> <li>Django admin</li> </ul> </td><td>Extensions: <ul> <li>Flask-Admin</li> <li>Flask-Login</li> <li>Flask-Security</li> </ul> </td></tr><tr><td><strong>Testing</strong></td><td> <ul> <li>Built-in test features and client</li> <li>pytest-django</li> <li>Automatic test isolation in databases</li> </ul> </td><td> <ul> <li>Built-in test features and client</li> <li>pytest-flask</li> <li>Database operations during testing to be handled manually or with extensions</li> </ul> </td></tr><tr><td><strong>Architecture</strong></td><td> <ul> <li>Used mostly for monolithic applications</li> <li>One app is responsible for one thing</li> <li>Can also be used for microservices</li> </ul> </td><td>Perfect for microservices: <ul> <li>Compact size</li> <li>Easily extendable</li> <li>RESTful-compliant</li> </ul> </td></tr><tr><td><strong>Learning curve</strong></td><td> <ul> <li>Challenging learning curve</li> <li>Consistent architecture facilitates late onboarding</li> </ul> </td><td> <ul> <li>The first app can be created in no time</li> <li>Perfect first framework for learning</li> </ul> </td></tr></tbody></table></figure>

<h3 class="wp-block-heading">FAQ</h3>

<h4 class="wp-block-heading">Which is better: Django or Flask?</h4>

<p>Both Django and Flask are modern, well-supported, and regularly updated frameworks. None of them is ‘better’, but you can choose which framework better suits your needs based on how complex your application or service will be, its architecture, the skills of your team members, etc.</p>

<p>If you are choosing your very first web framework for learning, you may want to start with Flask. It will be easier for you to learn Django afterwards.</p>

<h4 class="wp-block-heading">Should I learn Django or Flask for a job?</h4>

<p>Both frameworks are very popular, and you definitely need to know at least one of them to work in web development. However, learning both will help you land a job faster.</p>

<h4 class="wp-block-heading">Is Django still relevant in 2023?</h4>

<p>Yes. According to the <a href="https://lp.jetbrains.com/python-developers-survey-2022/#FrameworksLibraries" target="_blank" rel="noreferrer noopener">Python Developers Survey 2022</a>, Django was used by 39% of Python developers. The preliminary results of the Developer Ecosystem Survey 2023 show that Django’s popularity remains high at 40%.</p>

<h4 class="wp-block-heading">Is Flask easier than Django?</h4>

<p>Yes, from a learner’s perspective, Flask is a more accessible framework. A basic Flask application can be created in a single file in no time, whereas writing a “Hello World” in Django requires creating a few files and other preliminary steps.</p>

<p>At the same time, Django is a self-contained and well-documented framework, which means that you can use it to build a full-fledged project without having to choose and incorporate any extensions.</p>

<h4 class="wp-block-heading">Is the Django framework the same as the Flask framework?</h4>

<p>While both Django and Flask are popular choices for web development with Python, they are different in many aspects and each suits different use cases.</p>

<p>Django is generally used for larger, more complex projects that can benefit from its “batteries included” approach and numerous built-in features.</p>

<p>Flask is a good choice for simple applications or microservices. It’s a minimalistic framework that offers developers the flexibility to add the functionality they need.</p>

<h4 class="wp-block-heading">Can you use Flask with Django?</h4>

<p>Mixing Django and Flask in one application doesn’t make much sense, although it is technically possible. They have overlapping functionalities and often handle similar tasks in a different way. Bringing both Flask and Django into one project will cause unnecessary confusion and complexity.</p>

<p>However, combining Flask and Django can be justified in specific cases, for example, as you migrate your project from one framework to another. Another case is microservices that may require specific features, or be developed by teams with different skill sets.</p>

<h3 class="wp-block-heading">Useful links</h3>

<h4 class="wp-block-heading">Documentation</h4>

<ul> <li><a href="https://docs.djangoproject.com/en/4.2/" target="_blank" rel="noreferrer noopener">Django documentation</a></li>

<li><a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank" rel="noreferrer noopener">Flask documentation</a></li>

<li><a href="https://jinja.palletsprojects.com/en/3.1.x/" target="_blank" rel="noreferrer noopener">Jinja documentation</a></li>

<li><a href="https://www.jetbrains.com/help/pycharm/django-support7.html" target="_blank" rel="noreferrer noopener">Django support in PyCharm</a></li>

<li><a href="https://www.jetbrains.com/help/pycharm/flask.html" target="_blank" rel="noreferrer noopener">Flask support in PyCharm</a></li> </ul>

<h4 class="wp-block-heading">Tutorials</h4>

<ul> <li>“<a href="https://blog.jetbrains.com/pycharm/2023/04/create-a-django-app-in-pycharm/" target="_blank" rel="noreferrer noopener">Create a Django App in PyCharm” tutorial</a></li>

<li>“<a href="https://blog.jetbrains.com/pycharm/2023/09/building-apis-with-django-rest-framework/" target="_blank" rel="noreferrer noopener">Building APIs With Django REST Framework” tutorial</a></li> </ul>

<h4 class="wp-block-heading">Videos</h4>

<ul> <li>“<a href="https://www.youtube.com/watch?v=rzyGVScRuxU" target="_blank" rel="noreferrer noopener">Create a Simple Django Web Application” video tutorial</a></li>

<li>“<a href="https://www.youtube.com/playlist?list=PLCTHcU1KoD9-nMZNBUT9Gq1JGCkcpMD_y" target="_blank" rel="noreferrer noopener">Django with PyCharm” playlist</a></li> </ul> ]]></content:encoded>

 </item> <item> <title>Scott Sauber &#8211; Test Driven Development with Blazor &#8211; Webinar Recording</title> <link> https://blog.jetbrains.com/dotnet/2023/11/10/scott-sauber-test-driven-development-with-blazor-webinar-recording/</link>

 <dc:creator><![CDATA[Khalid Abuhakmeh]]></dc:creator> <pubDate>Fri, 10 Nov 2023 11:57:10 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/10/Featured_Blog_image_1280x720-2x.png</featuredImage> <category><![CDATA[net-tools]]></category> <category><![CDATA[blazor]]></category> <category><![CDATA[c]]></category> <category><![CDATA[resharper]]></category> <category><![CDATA[rider]]></category> <category><![CDATA[tdd]]></category> <category><![CDATA[tutorial]]></category> <category><![CDATA[webinars]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=dotnet&#038;p=404756</guid>

 <description><![CDATA[The webinar recording for Test Driven Development with Blazor, with Director of Engineering at Lean TECHniques, Scott Sauber is now available. In this session, we will discuss how to do Test Driven Development (TDD) as it applies to Blazor development. We will start with the basics of test-driven development, why you should be doing it, [&#8230;]]]></description> <content:encoded><![CDATA[ <p>The webinar recording for <strong>Test Driven Development with Blazor</strong>, with Director of Engineering at <a href="https://leantechniques.com/" target="_blank" rel="noopener">Lean TECHniques</a>, Scott Sauber is now available.</p>

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"> <iframe loading="lazy" title="Test Driven Development with Blazor" width="500" height="281" src="https://www.youtube.com/embed/aWY7R7Egm70?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div><figcaption class="wp-element-caption">Scott Sauber &#8211; Test Driven Development with Blazor</figcaption></figure>

<p>In this session, we will discuss how to do Test Driven Development (TDD) as it applies to Blazor development. We will start with the basics of test-driven development, why you should be doing it, and how it improves the quality of your software. </p>

<p>We&#8217;ll also talk about how you can test-driven development the front end, despite many saying &#8220;it&#8217;s hard&#8221; or even &#8220;impossible&#8221;. All along the way, we will do live coding demos so that you can see test-driven development in action. </p>

<h2 class="wp-block-heading">Agenda</h2>

<ul> <li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=0s" target="_blank" rel="noopener">00:00 &#8211; Introduction</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=130s" target="_blank" rel="noopener">02:10 &#8211; Presentation Start</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=377s" target="_blank" rel="noopener">06:17 &#8211; Why do we write tests?</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=516s" target="_blank" rel="noopener">08:36 &#8211; What is TDD?</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=560s" target="_blank" rel="noopener">09:20 &#8211; How to TDD?</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=1061s" target="_blank" rel="noopener">17:41 &#8211; What is NOT TDD?</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=1327s" target="_blank" rel="noopener">22:07 &#8211; Applying TDD to Blazor and Tools</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=1622s" target="_blank" rel="noopener">27:02 &#8211; What should I test and not test?</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=2369s" target="_blank" rel="noopener">39:29 &#8211; Live Coding</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=3007s" target="_blank" rel="noopener">50:07 &#8211; Chekov&#8217;s Gun</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=3628s" target="_blank" rel="noopener">1:00:28 &#8211; Getting Started / No Excuses</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=3933s" target="_blank" rel="noopener">1:05:33 &#8211; Q &amp; A</a></li>

<li><a href="https://www.youtube.com/watch?v=aWY7R7Egm70&amp;t=4380s" target="_blank" rel="noopener">1:13:00 &#8211; Wrap Up and Thanks</a></li> </ul>

<p></p>

<h2 class="wp-block-heading">Links</h2>

<ul> <li><a href="https://scottsauber.com/" target="_blank" rel="noopener">https://scottsauber.com</a></li>

<li><a href="https://twitter.com/scottsauber" target="_blank" rel="noopener">https://twitter.com/scottsauber</a></li>

<li><a href="https://leantechniques.com/" target="_blank" rel="noopener">https://leantechniques.com/</a></li>

<li><a href="https://github.com/scottsauber/talks/" target="_blank" rel="noopener">https://github.com/scottsauber/talks/</a></li> </ul>

<p>&#8211; Slides &#8211; <a href="https://scottsauber.com/wp-content/uploads/2023/11/TDD-with-Blazor.pdf" target="_blank" rel="noopener">https://scottsauber.com/wp-content/uploads/2023/11/TDD-with-Blazor.pdf</a><br>&#8211; Live Templates &#8211; <a href="https://scottsauber.com/2023/11/09/jetbrains-rider-live-templates/" target="_blank" rel="noopener">https://scottsauber.com/2023/11/09/jetbrains-rider-live-templates/</a><br>&#8211; Code from Webinar &#8211; <a href="https://github.com/scottsauber/talks/tree/main/2023-11-09-JetBrains-TDDWithBlazor" target="_blank" rel="noopener">https://github.com/scottsauber/talks/tree/main/2023-11-09-JetBrains-TDDWithBlazor</a></p>

<p>About the presenter:</p>

 <div class="about-author "> <div class="about-author__box"> <div class="row"> <div class="about-author__box-img"> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/10/image.png" alt="" loading="lazy"> </div> <div class="about-author__box-text"> <h4>Scott Sauber</h4> <p>Scott Sauber is Director of Engineering at <a href="https://leantechniques.com/" target="_blank" rel="noopener">Lean TECHniques</a> where he works on some internal initiatives and also works with clients, usually helping them build web apps using some combination of C# and/or JavaScript, as well as help develop better software engineering cultures.</p> <p>Besides web stuff, he&#8217;s also really passionate about DevOps, building communities, and technology in general. Scott is extremely passionate about giving back to the software community, because others have helped him (and continue to do so).</p> <p>Social Links:</p> <ul> <li><a href="https://scottsauber.com" target="_blank" rel="noopener">https://scottsauber.com</a></li> <li><a href="https://twitter.com/scottsauber" target="_blank" rel="noopener">https://twitter.com/scottsauber</a></li> <li><a href="https://leantechniques.com/" target="_blank" rel="noopener">https://leantechniques.com/</a></li> </ul> </div> </div> </div> </div> ]]></content:encoded>

 </item> <item> <title>Power Up Your Pipelines with New Agent Types Available in TeamCity Cloud</title> <link>https://blog.jetbrains.com/teamcity/2023/11/new-agent-types-teamcity-cloud/</link>

 <dc:creator><![CDATA[Olga Bedrina]]></dc:creator> <pubDate>Fri, 10 Nov 2023 09:23:30 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/new-build-agents-in-teamcity-cloud-features.png</featuredImage> <category><![CDATA[news]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=teamcity&#038;p=404601</guid>

 <description><![CDATA[We’re introducing new types of JetBrains build agents to TeamCity Cloud. These new, more powerful agents can handle more intense builds, helping your team to build projects of any complexity. The new agent types include new ARM Linux machines and the latest versions of the Ubuntu and Windows operating systems. What are build agents in [&#8230;]]]></description> <content:encoded><![CDATA[ <p>We’re introducing <strong>new types of JetBrains build agents</strong> to TeamCity Cloud. These new, more powerful agents can handle more intense builds, helping your team to build projects of any complexity.</p>

<p>The new agent types include new ARM Linux machines and the latest versions of the Ubuntu and Windows operating systems.</p>

<h2 class="wp-block-heading">What are build agents in TeamCity?</h2>

<p>In TeamCity, <a href="https://www.jetbrains.com/help/teamcity/cloud/build-agent.html" target="_blank" rel="noopener">build agents</a> are distributed agents responsible for executing the actual build and deployment processes defined in your build configurations. These agents perform tasks such as compiling code, running tests, packaging applications, and deploying artifacts.</p>

<p>Build agents in TeamCity enable parallel and distributed builds, which are essential for large and complex projects.</p>

<p>In TeamCity Cloud, you can use <a href="https://www.jetbrains.com/help/teamcity/cloud/managing-subscription-and-resources.html#Get+Self-Hosted+Build+Agents" target="_blank" rel="noopener">self-hosted build agents</a> or take advantage of JetBrains-hosted agents. The latter are maintained and configured by JetBrains. They are started on-demand as soon as each new build needs to run.</p>

<p>Thanks to JetBrains-hosted agents, you can start building quickly, as you don’t need to spend time on initial agent setup and maintenance. We are now extending this fleet of agents to ensure more user scenarios are covered.</p>

<h2 class="wp-block-heading">New operating systems</h2>

<p>Previously, TeamCity Cloud offered JetBrains-hosted agents on Ubuntu 20.04 and Windows 2019. In the next two years, these OS versions will come to the end of their standard support timeline (January 2024 for Windows Server 2019 and April 2025 for Ubuntu 20.04).</p>

<p>In order to prepare for the end of this support and meet the growing demand for the latest long-term support versions, we’re now introducing agents on: <strong>Ubuntu 22.04 </strong>and<strong> Windows 2022</strong>. The complete list is as follows:</p>

<ul> <li><strong>Windows</strong>: Windows-Server-2022-Small (2 vCPU), Windows-Server-2022-Medium (4 vCPU), Windows-Server-2022-Large (8 vCPU), Windows-Server-2022-XLarge (16 vCPU).<br></li>

<li><strong>Linux</strong>: Ubuntu-22.04-Small (2 vCPU), Ubuntu-22.04-Medium (4 vCPU), Ubuntu-22.04-Large (8 vCPU), Ubuntu-22.04-XLarge (16 vCPU).</li> </ul>

<p>The set of preinstalled software and hardware specifications remain the same as for previous versions. See the documentation for further details.</p>

<h3 class="wp-block-heading">Price</h3>

<p>There are two pricing options available for JetBrains agents:</p>

<ol> <li>You can pay for the exact number of build minutes that an agent is occupied.</li>

<li>You can reserve an agent for a month and pay in advance.</li> </ol>

<p>Both per-minute and per-month prices haven’t changed and are the same as for the older versions of agents of the same size.</p>

<p>For instance, the price for Windows-Server-2022-Small is the same as for Windows-Small –&nbsp;20 credits per minute or 150,000 TeamCity Cloud build credits monthly.</p>

<h3 class="wp-block-heading">The recommended way to set up a build</h3>

<p>To define whether a build configuration can run on a particular build agent, you need to configure <a href="https://www.jetbrains.com/help/teamcity/agent-requirements.html" target="_blank" rel="noopener">agent requirements</a>. The most straightforward way is to set a requirement for an agent name:</p>

<pre class="EnlighterJSRAW">teamcity.agent.name equals Ubuntu-22.04-Small</pre>

<p>There are dedicated parameters for the OS version and CPU count, which can be combined in the following manner:</p>

<pre class="EnlighterJSRAW">teamcity.agent.os.name equals Windows-Server-2019 teamcity.agent.hardware.cpuCount is more than 2</pre>

<p>Finally, we provide a parameter to stick to the latest version. When a newer version of the OS is released in the future, you won’t have to change the requirements manually.</p>

<pre class="EnlighterJSRAW">teamcity.agent.os.family equals Windows teamcity.agent.os.latest equals true</pre>

<p>Any other requirements are also valid. For instance, you can set a requirement for specific software that needs to be installed on the agent:</p>

<pre class="EnlighterJSRAW">docker.version equals 20.10.9</pre>

<h2 class="wp-block-heading">Larger Windows agents</h2>

<p>TeamCity Cloud already provides Windows build agents featuring 2 and 4 vCPU. However, when it comes to games, simulators, physics engines, and other projects that demand huge bandwidth, much more is needed.</p>

<p>On the other hand, developers continue to say that waiting for feedback from their CI tool is one of the most time-consuming parts of their job.</p>

<p>To handle the intensive computations and tests, Large and XLarge Windows agents are now available. Compared to the Medium machines, vCPU count, RAM size, and fast SSD storage are double for Large agents, and XLarge ones have four times more resources.</p>

<p>Here’s the full list of the new Windows agents with specifications:</p>

<figure class="wp-block-table"><table><tbody><tr><td><strong>Agent Name</strong></td><td><strong>vCPU</strong></td><td><strong>RAM</strong></td><td><strong>Storage</strong></td></tr><tr><td>Windows-Server-2019-Large<br>Windows-Server-2022-Large</td><td>8</td><td>16 GB</td><td>200 GB SSD for running builds<br>100 GB root EBS volume</td></tr><tr><td>Windows-Server-2019-XLarge<br>Windows-Server-2022-XLarge</td><td>16</td><td>32 GB</td><td>400 GB SSD for running builds<br>100 GB root EBS volume<br></td></tr></tbody></table></figure>

<h3 class="wp-block-heading">Price</h3>

<p>The prices for large Windows agents are as follows:<br></p>

<ul> <li>8 vCPU Windows (both Windows 2019 and 2022): 80 build credits per minute or 600,000 TeamCity Cloud build credits monthly<br></li>

<li>16 vCPU Windows (both Windows 2019 and 2022): 160 build credits per minute or 1,200,000 TeamCity Cloud build credits monthly</li> </ul>

<h3 class="wp-block-heading">The recommended way to set up a build</h3>

<p>You may use a requirement on an agent name or OS version and CPU count, in the same way as described in the previous section.</p>

<h2 class="wp-block-heading">How can I find the most suitable agent for my builds?</h2>

<p>TeamCity Cloud automatically collects CPU and memory usage during a build, which can help you analyze if a build requires hardware adjustment.</p>

<p>Let’s try to test the Kotlin Compiler (Gradle jvmCompilerTest task)&nbsp; on Windows-Server-2019-Medium to see how it works on Windows. As you can see, the CPU and memory usage remains high during almost the entire execution process. This makes it a solid candidate for tweaking the hardware requirements.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="1999" height="1027" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/new-agent-types-in-teamcity-test1.png" alt="" class="wp-image-404836"/></figure>

<p>Here’s how the performance improves once we switch to the brand-new Windows-Server-2019-Large agent:</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="1999" height="1099" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/new-agent-types-in-teamcity-test2.png" alt="" class="wp-image-404847"/></figure>

<p>The build duration was roughly halved. Given that Windows-Server-2019-Large is twice as expensive as Windows-Server-2019-Medium, the result was a faster build for the same price.</p>

<p>However, the CPU load is still rather high. We can further decrease the build time by adopting an XLarge agent.</p>

<h2 class="wp-block-heading">ARMs</h2>

<p>The popularity of ARM processors has skyrocketed recently. More and more vendors are porting their software products to this platform. While it’s technically possible to produce ARM-specific distributions on x86 architecture with the help of emulators, native builds are a higher performing and more resilient method.</p>

<p>New Ubuntu ARM agents complement the platforms that JetBrains agents facilitate builds for. Powered by the latest <a href="https://aws.amazon.com/ec2/graviton/" target="_blank" rel="noopener">AWS Graviton3</a> processors, they also boast better performance compared to the x86 versions.</p>

<p>ARM agents will be available with both supported Ubuntu versions and all hardware tiers:</p>

<ul> <li>Ubuntu-20.04-Small-Arm64 (2 vCPU)</li>

<li>Ubuntu-20.04-Medium-Arm64 (4 vCPU)</li>

<li>Ubuntu-20.04-Large-Arm64 (8 vCPU)</li>

<li>Ubuntu-20.04-XLarge-Arm64 (16 vCPU)</li>

<li>Ubuntu-22.04-Small-Arm64 (2 vCPU)</li>

<li>Ubuntu-22.04-Medium-Arm64 (4 vCPU)</li>

<li>Ubuntu-22.04-Large-Arm64 (8 vCPU)</li>

<li>Ubuntu-22.04-XLarge-Arm64 (16 vCPU)</li> </ul>

<h3 class="wp-block-heading">Price</h3>

<p>For the new ARM Ubuntu agents, both the per-minute and per-month prices are the same as our current pricing for the x86 versions of agents of the same size.</p>

<p>For instance, the price for Ubuntu-20.04-Small-Arm64 is the same as for Ubuntu-20.04-Small – 10 credits per minute or 75,000 TeamCity Cloud build credits monthly.</p>

<h3 class="wp-block-heading">Recommended way to set up a build</h3>

<p>Here’s the requirement that you can use for the new agent names:</p>

<pre class="EnlighterJSRAW">teamcity.agent.name equals Ubuntu-20.04-Large-Arm64</pre>

<p>There is also a dedicated parameter for the architecture type:</p>

<pre class="EnlighterJSRAW">teamcity.agent.cpuArchitecture equals aarch64</pre>

<h3 class="wp-block-heading">How can TeamCity help adapt my builds for ARM?</h3>

<p>It would be wonderful if starting building for ARM was as simple as copying an existing x86-specific configuration and just changing a required agent. However, the ARM environment is different, and your software and build configurations might need adjustment.</p>

<p>Debugging such configurations gets even more complicated if your local machine has a different architecture. The good news is that TeamCity improves the user experience when undertaking this task.</p>

<p>When a build is running, you can access an agent in a single click through an <a href="https://blog.jetbrains.com/teamcity/2023/07/introducing-agent-terminals/" data-type="link" data-id="https://blog.jetbrains.com/teamcity/2023/07/introducing-agent-terminals/">agent terminal</a>.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="1999" height="1119" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/new-agent-types-in-teamcity_4.png" alt="" class="wp-image-404819"/></figure>

<p>This feature is extremely beneficial to quickly see how your commands perform in a specific environment.</p>

<p>TeamCity goes beyond just that. You can run a build with your local changes on a CI agent right from IntelliJ IDEA, harnessing the<em> </em><a href="https://www.jetbrains.com/help/teamcity/ij-addin/tc-run-build-remotely.html" target="_blank" rel="noopener"><em>Remote Run</em> feature</a>. It even allows you to <a href="https://www.jetbrains.com/help/teamcity/remote-debug.html" target="_blank" rel="noopener">debug your tests</a> using the built-in debugger!</p>

<h2 class="wp-block-heading">New default build agents</h2>

<p>Currently, the default OS versions are <strong>Ubuntu 20.04 </strong>and <strong>Windows 2019</strong>. This means that TeamCity will prefer these versions when it picks up an agent for a build in case another version is not selected with explicit agent requirements.</p>

<p>Due to the end of standard support approaching for the aforementioned versions, we want to shift our focus to the latest versions. Starting from February 1, 2024, the new default build agents will be <strong>Ubuntu 22.04</strong> and <strong>Windows 2022</strong>, respectively.</p>

<p>The older versions will be deprecated in the future. To ensure a smooth transition, we encourage you to gradually start adopting new agents using the recommended methods above.</p>

<h2 class="wp-block-heading">New naming conventions</h2>

<p>Previously, an agent name consisted of an OS name and size, but our new agents don&#8217;t fit this model. The new format will include a specific OS name, version, size, and, optionally, architecture.</p>

<p>All of the agents mentioned above follow the new convention.</p>

<p>The old name format will be preserved as an easy and short alias to a default OS version. This will help us to preserve backward compatibility with the existing requirements.</p>

<p>For existing customers, the old agents will list the the old versions until February 1, 2024:</p>

<pre class="EnlighterJSRAW">Linux-Small =&gt; Ubuntu-20.04-Small Windows-Medium =&gt; Windows-Server-2019-Medium</pre>

<h2 class="wp-block-heading">Over to you</h2>

<p>Do you have any questions regarding the new agent types in TeamCity? Feel free to reach out to us in the comments section below or <a href="https://teamcity-support.jetbrains.com/hc/en-us?_gl=1*1p9shi1*_ga*MTkyODMxNzI0My4xNjY3OTE0NjMz*_ga_9J976DJZ68*MTY5ODIzODE0MS4yNTkuMS4xNjk4MjQyMjIxLjIzLjAuMA..&amp;_ga=2.117435662.924699421.1698051581-1928317243.1667914633&amp;_gac=1.119163515.1698051893.CjwKCAjws9ipBhB1EiwAccEi1PGktlK0Rt3pOifLNtpBnBBQg4hkiAIs3qHslAsCeT9qcSxbL_S3tBoCggUQAvD_BwE" target="_blank" rel="noopener">via the forum</a>. We’ll be happy to help!</p> ]]></content:encoded>

 </item> <item> <title>MPS 2022.3.1 Has Been Released</title> <link>https://blog.jetbrains.com/mps/2023/11/mps-2022-3-1-has-been-released/</link>

 <dc:creator><![CDATA[Vaclav Pech]]></dc:creator> <pubDate>Thu, 09 Nov 2023 20:23:40 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/05/Release_Preview_image_1280x600_MPS-2x.png</featuredImage> <category><![CDATA[releases]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=mps&#038;p=404690</guid>

 <description><![CDATA[For MPS users that are using last year’s version (2022.3), we’re releasing an update with numerous fixes. Many of them have been back-ported from the new MPS 2023.2, so you may have heard of some of them already. DOWNLOAD MPS 2022.3.1 See a full list of issues fixed in 2022.3.1 here. Back-ported from 2023.2 Visualize [&#8230;]]]></description> <content:encoded><![CDATA[<p>For MPS users that are using last year’s version (2022.3), we’re releasing an update with numerous fixes. Many of them have been back-ported from the new MPS 2023.2, so you may have heard of some of them already.</p> <p align="center"><a class="jb-download-button" href="https://www.jetbrains.com/mps/download/previous.html" target="_blank" rel="noopener">DOWNLOAD MPS 2022.3.1</a></p> <p>See a full list of issues fixed in 2022.3.1 <a href="https://youtrack.jetbrains.com/issues/MPS?q=state:Resolved%20version:%202022.3.1%20order%20by:%20Priority%20%20&#038;_ga=2.231099997.350008667.1687951340-393819702.1681896790&#038;_gl=1*183w1l3*_ga*MzkzODE5NzAyLjE2ODE4OTY3OTA.*_ga_9J976DJZ68*MTY4Nzk2NjcyOS4zMC4xLjE2ODc5Njc0MzYuNy4wLjA." target="_blank" rel="noopener">here</a>.</p> <h2>Back-ported from 2023.2</h2> <h3>Visualize the current values for cells that violate constraints</h3> <p>When an invalid value is inserted into a cell, the inserted invalid value is marked in red. While the original valid value is preserved in the model, the cell does not show it. The editor can now be configured to remove an invalid value in an editable cell and replace it with the valid value preserved in the model as soon as the cursor leaves the cell.</p> <h2>Back-ported from 2023.2 and also available in 2021.3.3</h2> <h3 id="inferenceruleoverriding">Inference rules can override rules from extended languages</h3> <p>MPS 2021.3.3 adopts one improvement that enhances the functionality of the <i>overrides</i> flag in the type system inference rules. Traditionally, the flag indicated that a particular rule overrode the rules defined for the super-concepts.<br /> More recently, the flag’s functionality has been enhanced to allow the rules defined in extending languages to <i>override</i> the rules defined for the same concept in the extended language.<br /> This gives you an additional way to alter the behavior of the languages you are extending.</p> <h3 id="disableonstartup">Disable Make On Startup flag is now available</h3> <p>A second backported feature is the new <i>Disable Make On Startup</i> option, available in <i>Settings -&gt; Project Settings -&gt; Make</i>. When this feature is enabled, MPS will not perform a <i>make</i> of all the project’s modules when starting up. This can speed up MPS startup in situations when the initial make takes too long and/or is likely to fail because manual configuration is necessary before the project can be successfully made.</p> <h2>Back-ported from 2023.2 and also available in 2021.3.4</h2> <h3 id="pmchecker">Parallel model checker</h3> <p>The model checker can now effectively utilize parallel hardware, speeding up the model checking process. Depending on the settings in <i>Settings | Tools | Model Checker</i>, it can spawn multiple threads when starting this process.</p> <h3 id="improved_per-root_persistence">Improved File-per-root persistence performance</h3> <p>The <i>FilePerRootDataSource.getStreamByName()</i> method has been optimized to improve model data loading performance. If you use File-per-root persistence to store large models, this change will be noticeable.</p> <h3>Improved support for Find text in project</h3> <p>The existing <i>Find text in project</i> action has been improved, and it now also searches for references to named nodes, bringing up additional relevant results.<br /> A preview panel has been added that allows you to see the results directly in the search dialog. Text containing HTML content is now rendered as plain text in the results, and not as HTML like in previous versions.<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/09/FindDialog.png" alt="" width="500" /></p> <h3>Skip dependency migration in Ant tasks</h3> <p>While migrating a project using Ant tasks provided by MPS, dependencies may not get properly migrated. We added a flag to continue the migration of a project even in such cases. Stopping the migration process as soon as a non-migrated dependency is discovered remains the default behavior.<br /> To use this flag, add <i>haltOnDependencyError=&#8221;false&#8221;</i> to your <i>&lt;migrate&gt;</i> Ant task.</p> <p align="center"><a class="jb-download-button" href="https://www.jetbrains.com/mps/download/previous.html" target="_blank" rel="noopener">DOWNLOAD MPS 2022.3.1</a></p> <p>Your JetBrains MPS team</p> ]]></content:encoded>

 </item> <item> <title>IntelliJ IDEA 2023.3 Goes Beta!</title> <link>https://blog.jetbrains.com/idea/2023/11/intellij-idea-2023-3-beta/</link>

 <dc:creator><![CDATA[Maria Kosukhina]]></dc:creator> <pubDate>Thu, 09 Nov 2023 17:29:25 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/2023.3-Beta-Blog_Featured_image_1280x600_IntelliJIDEA-2x.png</featuredImage> <category><![CDATA[eap]]></category> <category><![CDATA[2023-3]]></category> <category><![CDATA[2023-3-eap]]></category> <category><![CDATA[intellij-idea-2023-3]]></category> <category><![CDATA[intellij-idea-2023-3-beta]]></category> <category><![CDATA[intellij-idea-2023-3-eap]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=idea&#038;p=404251</guid>

 <description><![CDATA[The 2023.3 Beta version of IntelliJ IDEA is here! You can get the latest build from our website, through the free Toolbox App, or via snaps for Ubuntu. This build includes all of the significant updates introduced during the Early Access Program, which we&#8217;ve detailed in our earlier blog posts. Here’s the list of the [&#8230;]]]></description> <content:encoded><![CDATA[ <p>The 2023.3 Beta version of IntelliJ IDEA is here!</p>

<p>You can get the latest build from our <a href="https://www.jetbrains.com/idea/nextversion/" target="_blank" rel="noopener">website</a>, through the free <a href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noopener">Toolbox App</a>, or via snaps for Ubuntu.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2560" height="1440" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/2023.3-Beta-Blog_Featured_image_1280x600_IntelliJIDEA-2x-1.png" alt="" class="wp-image-404575"/></figure>

<p>This build includes all of the significant updates introduced during the Early Access Program, which we&#8217;ve detailed in our earlier <a href="https://blog.jetbrains.com/idea/tag/intellij-idea-2023-3-eap/">blog posts</a>.</p>

<p>Here’s the list of the most notable improvements and additions in the upcoming major release:</p>

<ul> <li>Full support for Java 21 features</li>

<li><em>Run to Cursor </em>inlay option in the debugger</li>

<li>Floating toolbar with code editing actions</li>

<li>Support for GitLab snippets</li>

<li>All-in-one diff viewer</li>

<li>Improvements for both Maven and Gradle import</li>

<li>Visual editing for OpenAPI specifications</li>

<li>Enhancements for Quarkus and Micronaut</li>

<li>Spring 6.1 feature support</li>

<li>Spring for GraphQL support</li>

<li>Kubernetes tooling available out of the box</li>

<li>Extended Dev Containers support</li>

<li>HTTP Client improvements</li> </ul>

<p></p>

<p>To learn about these and other new features in detail, explore the IntelliJ IDEA 2023.3 EAP section of <a href="https://blog.jetbrains.com/idea/tag/intellij-idea-2023-3-eap/">our blog</a>.</p>

<p>In this blog post, we’d also like to draw your attention to some changes that were not covered before.</p>

<h2 class="wp-block-heading">Kotlin</h2>

<h3 class="wp-block-heading">Latest Kotlin version support now comes with IDE updates</h3>

<p>As of v2023.3, support for new Kotlin versions is delivered together with IntelliJ IDEA and Android Studio updates, meaning that you no longer need to update the Kotlin plugin from the JetBrains Marketplace. With every major IDE release, you can expect built-in support for upcoming Kotlin Beta and Stable versions.</p>

<h3 class="wp-block-heading">Kotlin auto-configuration in Java Gradle projects</h3>

<p>If you add a Kotlin file to a Java module, IntelliJ IDEA can now automatically add all needed Kotlin dependencies to the module by changing build scripts. You can easily review these changes and undo them.&nbsp;</p>

<p>For now, auto-configuration is possible for Gradle projects that meet specific criteria, some of which include:</p>

<ul> <li>The Gradle version must be compatible with the Kotlin versions that are available for this project.&nbsp;</li>

<li>Modules must not contain a <em>\`buildSrc\`</em> folder.</li>

<li>Gradle sync must not be in progress.&nbsp;</li> </ul>

<p></p>

<p>If auto-configuration is not possible, the IDE will suggest you manually configure Kotlin as before.</p>

<figure class="wp-block-image"><img decoding="async" src="https://lh7-us.googleusercontent.com/PLVHjcegZ9VOGszwEQv-ivQpDuH59e6UHs813PsWvlpI95fwFuRrzXzb-_vxTDoefYTsl-eo6k6CczpfGYYJmglb5es0d28PFZ9PlQXNDra4vCSdt7-Tq4cfwDzc48mLaN30az1sG6_KbeJr8xWSv6w" alt=""/></figure>

<h2 class="wp-block-heading">Other</h2>

<h3 class="wp-block-heading">Plugin updates</h3>

<p>In IntelliJ IDEA 2023.3 and beyond, we have made changes to our plugin distribution. Android, Ant, and GlassFish plugins are now available through JetBrains Marketplace. This also applies to the XPathView plugin for the IntelliJ IDEA Community edition.</p>

<p>These are the updates we wanted to share with you this week. For the full list of the latest changes, check out the <a href="https://youtrack.jetbrains.com/articles/IDEA-A-2100661745/IntelliJ-IDEA-2023.3-Beta-233.11799.6-build-Release-Notes" data-type="link" data-id="https://youtrack.jetbrains.com/articles/IDEA-A-2100661745/IntelliJ-IDEA-2023.3-Beta-233.11799.6-build-Release-Notes" target="_blank" rel="noopener">release notes</a>.</p>

<p>The Early Access Program for IntelliJ IDEA 2023.3 is coming to a close. However, you still have the opportunity to explore the latest features and provide us with your valuable feedback.</p>

<p>We&#8217;d love to hear your thoughts, so please share your opinions in the comments section below or on <a href="http://twitter.com/intellijidea" target="_blank" rel="noopener">X (formerly Twitter)</a>. If you encounter any bugs, report them through our <a href="https://youtrack.jetbrains.com/issues/IDEA" target="_blank" rel="noopener">issue tracker</a>. Your feedback is essential to us!</p>

<p>Happy developing!</p> ]]></content:encoded>

 </item> <item> <title>CLion Nova Explodes onto the C and C++ Development Scene</title> <link>https://blog.jetbrains.com/clion/2023/11/clion-nova/</link>

 <dc:creator><![CDATA[Anastasia Kazakova]]></dc:creator> <pubDate>Thu, 09 Nov 2023 15:02:52 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/Featured_Blog_1280x720_CLionNova.png</featuredImage> <category><![CDATA[news]]></category> <category><![CDATA[releases]]></category> <category><![CDATA[cpp]]></category> <category><![CDATA[clionnova]]></category> <category><![CDATA[performance]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=clion&#038;p=404222</guid>

 <description><![CDATA[TL;DR Today, we’re announcing a free early preview of CLion, which uses the ReSharper C++/Rider C++ language engine instead of the CLion &#34;legacy&#34; engine. The Preview build is available via our dedicated Toolbox App feed. At some point in 2024, depending on the results of the feedback collected, CLion Nova will be merged into CLion. [&#8230;]]]></description> <content:encoded><![CDATA[<p>TL;DR</p> <p>Today, we’re announcing a free early preview of CLion, which uses the ReSharper C++/Rider C++ language engine instead of the CLion &quot;legacy&quot; engine. The Preview build is available via our dedicated Toolbox App feed. At some point in 2024, depending on the results of the feedback collected, CLion Nova will be merged into CLion. Until then, the Preview build will be free to use and can be installed in parallel with your usual CLion (Classic) installation.</p> <p><a href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noopener"><img decoding="async" alt="CLion Nova" width="640" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/Featured_Blog_1280x720_CLionNova.png"/></a></p> <h2 id="prehistory">Prehistory</h2> <p>The first C++ engine by JetBrains was designed for AppCode, our IDE for iOS and macOS developers. It was part of the IntelliJ Platform, initially written in Java and later also in Kotlin. The approach and the architecture of the engine serve many languages in IntelliJ-based IDEs well; however, this design turned out not to be the best fit for the C++ language specifically.</p> <p>To more quickly align with the evolution of C++ and to separate the engine and IDE processes, a clangd-based engine was later added to CLion. Built on our custom branch of clangd, this engine detects any warnings and errors, shows them in the editor, and suggests quick-fixes, as well as performing highlighting, completion, and certain navigation actions. It’s also used for things like <a href="https://blog.jetbrains.com/clion/2023/11/striving-for-better-cpp-code-part-i-data-flow-analysis-basics/">data flow analysis</a> and MISRA checks. Meanwhile, CLion&#8217;s “legacy” engine is responsible for other code insight features like refactorings. You can see a detailed “list of responsibilities” in our <a href="https://www.jetbrains.com/help/clion/2023.3/c-support.html" target="_blank" rel="noopener">CLion documentation</a>.</p> <p>Clangd has many advantages, but it isn’t very helpful when it comes to project-wide refactorings and actions. We prototyped a clangd-based indexer and even implemented an experimental <em>Find Usages</em> on top of it, which you can <a href="https://www.jetbrains.com/help/clion/2023.3/find-highlight-usages.html#usages-clangdindexer" target="_blank" rel="noopener">enable and evaluate in </a><a href="https://www.jetbrains.com/help/clion/2023.3/find-highlight-usages.html#usages-clangdindexer" target="_blank" rel="noopener">CLion</a>.</p> <p>Another alternative developed by JetBrains for C++ is the language engine used in ReSharper C++ and Rider (for game development in C++). There is also a communication protocol in place that makes it possible for an IntelliJ-based IDE like Rider to communicate with the stand-alone backend process serving as a language engine. We have now adapted this protocol and the original engine to CLion as well!</p> <h2 id="goals">Goals</h2> <p>In this new and experimental solution, we’re focused on the responsiveness, accuracy, and performance of the IDE. There are two main goals we have in mind:</p> <ul> <li>Addressing the long-standing <strong>performance</strong> and <strong>quality</strong> issues of CLion caused by the usage of the “legacy” engine.</li> <li>Unifying the user experience across all of our C++ tools, i.e. CLion, Rider, and ReSharper C++.</li> </ul> <p><img decoding="async" alt="CLion Nova About" width="531" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/about.png"/></p> <p>We named our new experimental preview <strong>CLion Nova,</strong> and the current version of CLion is now <strong>CLion Classic</strong>. In the future, we plan for CLion Nova to be merged into CLion Classic. No new product is envisaged.</p> <h2 id="benefits_and_enhancements">Benefits and enhancements</h2> <p>CLion Nova still uses two C++ language engines: a clangd-based one and the one used by ReSharper C++/Rider. Most of the features of CLion Classic should work exactly the same in CLion Nova.</p> <p>The most notable benefits in terms of performance in CLion Nova are:</p> <ul> <li>Faster highlighting speeds, especially in the case of incremental code updates</li> <li>A more responsive UI</li> <li>Faster <em>Find Usages</em></li> <li>Significantly fewer freezes and hangs in refactorings</li> <li>Faster test indexing</li> </ul> <p>This unification also brings some new functions to CLion Nova that aren’t included in CLion Classic’s feature set:</p> <ul> <li>New refactorings like <a href="https://www.jetbrains.com/help/resharper/Refactorings_for_CPP.html#intro_field" target="_blank" rel="noopener">introduce field</a>, <a href="https://www.jetbrains.com/help/resharper/Refactorings_for_CPP.html#namespace_alias" target="_blank" rel="noopener">introduce namespace alias</a>, <a href="https://www.jetbrains.com/help/resharper/Refactorings_for_CPP.html#using_enum" target="_blank" rel="noopener">introduce using enumeration</a>, and <a href="https://www.jetbrains.com/help/resharper/Refactorings_for_CPP.html#convert_to_scoped" target="_blank" rel="noopener">convert to scoped enumeration</a>.</li> <li>New inspections, quick-fixes, and intentions like redundant qualifier, the replace <code>auto</code> with explicit type declaration, and <a href="https://www.jetbrains.com/help/resharper/Code_Style_Assistance_in_CPP.html#sort_includes" target="_blank" rel="noopener">sorting of </a><a href="https://www.jetbrains.com/help/resharper/Code_Style_Assistance_in_CPP.html#sort_includes" target="_blank" rel="noopener"><code>#include</code></a><a href="https://www.jetbrains.com/help/resharper/Code_Style_Assistance_in_CPP.html#sort_includes" target="_blank" rel="noopener"> directives</a>.</li> <li>New code hints like <a href="https://www.jetbrains.com/help/resharper/Settings_Inlay_Hints_CPP_Other.html#preprocessor-directive" target="_blank" rel="noopener">preprocessor directive hints</a> and a <a href="https://www.jetbrains.com/help/resharper/Inline_Parameter_Name_Hints.html#push-to-hint-mode" target="_blank" rel="noopener">Push-to-Hint mode</a>.</li> </ul> <p><img decoding="async" alt="Sorting includes" width="600" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/sort_includes.png"/></p> <h2 id="notable_differences">Notable differences</h2> <p>Unlike CLion Classic, CLion Nova doesn&#8217;t use <strong>clangd</strong> for core IDE features like code completion or highlighting. However, the JetBrains&#8217; clangd fork is still running alongside the new engine for various tasks (ClangFormat, Clang-Tidy, MISRA checks, data flow analysis, etc.).</p> <p>There are a few things that will look and feel new to CLion Classic users when they start using CLion Nova:</p> <ul> <li>Some of the ways the IDE reacts when the user is typing are different.</li> <li>Some UI elements and settings related to code insight features might look unusual or be found in unfamiliar locations.</li> <li>Some code-related settings might have different default values in CLion Nova. On the first launch, CLion Nova will migrate some of your per-project and per-application settings from CLion Classic, but not all of them.</li> <li>Switching between different language configurations (i.e. Debug/Release) might require more time for the code insight engine to catch up. There is also no option to switch resolve context per file.</li> <li>ReSharper C++ is Windows-only, while Rider is cross-platform. Still, the ReSharper C++/Rider engine might not support non-Windows environments as seamlessly as a Windows one. It’s worth reporting such cases to us if you come across them.</li> </ul> <p><img decoding="async" alt="Type conversion hints settings" width="912" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/type_conversion_hints.png"/></p> <p>There’s also a list of currently missing functionality:</p> <ul> <li><strong>Toolchains</strong>: Several options exist to set up <a href="https://www.jetbrains.com/help/clion/2023.3/remote-development.html" target="_blank" rel="noopener">remote work</a> in CLion. Remote work with local sources is supported in CLion Nova, while remote work with a thin client (Gateway) is not yet available.</li> <li><strong>Languages</strong>: Objective-C language, CUDA (<a href="https://youtrack.jetbrains.com/issue/RSCPP-613" target="_blank" rel="noopener">RSCPP-613</a>, <a href="https://youtrack.jetbrains.com/issue/CPP-26144" target="_blank" rel="noopener">CPP-26144</a>), and some vendor-specific compiler extensions aren’t yet supported.</li> <li>Some intentions and quick-fixes like <em>Simplify statement</em> are not supported at present (<a href="https://youtrack.jetbrains.com/issue/CPP-35879" target="_blank" rel="noopener">CPP-35879</a>).</li> <li>Some less popular refactorings are also missing. We plan to reintroduce the <em>Move</em> (<a href="https://youtrack.jetbrains.com/issue/CPP-35867" target="_blank" rel="noopener">CPP-35867</a>) and <em>Inline Parameter</em> refactorings (<a href="https://youtrack.jetbrains.com/issue/CPP-35868" target="_blank" rel="noopener">CPP-35868</a>) at a later date.</li> <li>JetBrains’ AI Assistant is not yet available for CLion Nova.</li> </ul> <h2 id="how_to_install_clion_nova">How to install CLion Nova</h2> <p>CLion Nova is a free early preview build available only via the <a href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noopener">Toolbox App</a>:</p> <p><img decoding="async" alt="Toolbox app" width="427" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/toolbox_app.png"/></p> <p>CLion Nova is an Early Access Preview build, which means a login is required, but you can use it for free until CLion Nova merges into CLion. We’ll be publishing regular updates to CLion Nova, which will also be available via the Toolbox App.</p> <p>Compared to CLion Classic, CLion Nova brings a more responsive UI, better overall IDE performance, and increased feature quality, especially with C++ code refactorings. Try it now and let us know what you think!</p> <h2 id="share_your_feedback">Share your feedback</h2> <p>CLion Nova marks a big change and requires detailed testing in various environments. So we’re asking you, our users, for help! Given that you have a variety of environments and use cases, we want you to test out CLion Nova and share your experiences with us.</p> <p>We are specifically interested in your thoughts on:</p> <ul> <li>What works better on your project in CLion Nova compared to CLion Classic?</li> <li>What interrupts your workflow and prevents you from using the IDE in CLion Nova? Are these interruptions CLion Nova-specific, or are they also present in CLion Classic?</li> </ul> <p>After using CLion Nova for some time, you’ll be asked to submit a feedback form. We’d be grateful if you can spare the time to do so!</p> <p><img decoding="async" alt="Feedback" width="688" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/feedback.png"/></p> <p>And, of course, our <a href="https://youtrack.jetbrains.com/issues/CPP" target="_blank" rel="noopener">issue tracker</a> is also open for receiving your feedback – just don’t forget to mention that your issue relates to CLion Nova and not CLion Classic.</p> <p align="center"><a class="jb-download-button" href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noopener"><i class="download-icon"></i>GET VIA TOOLBOX APP</a></p> <p>Your CLion team<br /> JetBrains<br /> <em>The Drive to Develop</em></p> ]]></content:encoded>

 </item> <item> <title>Toolbox App 2.1 Is Now Available</title> <link>https://blog.jetbrains.com/toolbox-app/2023/11/toolbox-app-2-1-is-now-available/</link>

 <dc:creator><![CDATA[Ivan Kuzmin]]></dc:creator> <pubDate>Thu, 09 Nov 2023 14:53:53 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/tb-release-featured_blog_1280x720.png</featuredImage> <product><![CDATA[blog]]></product> <category><![CDATA[toolbox-app]]></category> <category><![CDATA[jetbrains-toolbox]]></category> <guid isPermaLink="false"> https://blog.jetbrains.com/?post_type=toolbox-app&#038;p=403369</guid>

 <description><![CDATA[In the previous release, we reworked the installation and update processes from the ground up, allowing for update downloads in the background to be performed first and introducing permanent installation paths that conform to operating system guidelines. Toolbox App 2.1 addresses feedback, fixes bugs, adds a few finishing touches to the new installation process, and [&#8230;]]]></description> <content:encoded><![CDATA[ <p>In the previous release, we reworked the installation and update processes from the ground up, allowing for update downloads in the background to be performed first and introducing permanent installation paths that conform to operating system guidelines.</p>

<p>Toolbox App 2.1 addresses feedback, fixes bugs, adds a few finishing touches to the new installation process, and introduces Ukrainian localization.</p>

<h3 class="wp-block-heading"><strong>Changing the installation directory is back</strong></h3>

<p>In <a href="https://blog.jetbrains.com/toolbox-app/2023/08/toolbox-app-2-0-overhauls-installations-and-updates/">Toolbox App 2.0</a>, we introduced the new default and fixed location for your tools, conforming to the operating system guidelines (<code>%LocalAppData%\\Programs</code> for <em>Windows</em>, <code>~/Applications</code> for <em>macOS</em>, and <code>~/.local/share/JetBrains/Toolbox/apps</code> for <em>Linux</em>).<br><br>With the introduction of Toolbox App 2.1, we bring back the ability to change the installation directory for your tools. You can now install your tools in the location of your choice, be it in a different folder or on a separate disk entirely.&nbsp;</p>

<p>To specify the new location, go to the Toolbox App settings (choose <em>Settings</em> under the locknut icon in the upper right-hand corner of the main Toolbox App screen), scroll down to the Tools section, and change the <em>Tools install location</em> field. All new tools will then be installed in the new location.<br>Keep in mind that tools installed prior to choosing a new location will remain in the directory in which they were originally installed. They won’t be moved to the new directory with this action or when updating the Toolbox App. We plan to introduce functionality to migrate already installed tools to a custom directory in a later release.</p>

<p class="has-text-align-center"><img decoding="async" loading="lazy" src="https://lh7-us.googleusercontent.com/VB9j4d5aIZDizP16OXsuU1UO41jZAihoL50pS8Gh7GLqad44A6_yA_nAugF58lp940BsWj1hlPD_2DRLyGbVq_2qWNPcadStiFJsSb-OHHlXD7IZHi2YzEc0wiHoZP-C_caC4J_sUx1saFSpYDx2Kfo" width="624" height="603"></p>

<h3 class="wp-block-heading"><strong>Dedicated action for cleaning backups</strong></h3>

<p>We introduced a new <em>Remove the previous versions</em> action for cleaning backups. By default, the Toolbox App cleans up the previously stored versions to enable instant rollback after three days. With the new action, you can see how much storage they use and remove them with a single click.</p>

<p class="has-text-align-center"><img decoding="async" loading="lazy" width="624" height="521" src="https://lh7-us.googleusercontent.com/rZCXdGEqMwoIaYs0f0Vvu28CObDZVPJfSjhCCzClIh_-es0EkNbUGGZVv3WmzJ8hbmNp5kEu1WWsj3jx2HK1bgWTbIZs0OxnsS3kKr9rSKvPVyIEdoPAOMbHn-r5TSNZZBLHoe7-E02uE_WdLmqFowI"></p>

<h3 class="wp-block-heading"><strong>Cache and temporary file storage&nbsp;</strong></h3>

<p>We eliminated the usage of a temporary directory for storing temporary files, fixing the need to allocate more storage to <code>/tmp</code> to update your tools seamlessly. The temporary files will now be stored in the Toolbox App cache folders.<br><br>On Linux, the cache directory now conforms to operating system guidelines and is moved to <code>~/.cache/JetBrains/Toolbox</code><em>.</em></p>

<h3 class="wp-block-heading"><strong>Warning about insufficient permissions</strong></h3>

<p>The Toolbox App can update tools only to a directory for which the user has given permissions. Previously, for tools in a write-protected directory, the Toolbox App didn’t show the <em>Update </em>button. Starting with version 2.1, you will see a disabled <em>Update </em>button and a <a href="https://toolbox-support.jetbrains.com/hc/en-us/articles/13696838691474-How-to-update-a-tool-if-The-installation-path-is-not-writable-error-is-shown-" target="_blank" rel="noopener">link</a> to an article providing clear instructions on how to restore the ability to update in the tool settings.<br>In a future release, we plan to introduce the ability to elevate permissions and install and update tools system-wide.</p>

<p class="has-text-align-center"><img decoding="async" loading="lazy" width="624" height="471" src="https://lh7-us.googleusercontent.com/emUyko2A_Y5VSlWUocsIVYH1wVbKDBcOhpffJQntp3ezxoorj6o4-EKb-MjjreCzNh47brJhN-7RcvuQTwTB-JpNXnsEPEm_U4bmovSpHMyi-HSxs7lpFTN5L-CE_XTPXGevdZmf7l9AYqVL8vP-XHU"></p>

<h3 class="wp-block-heading"><strong>Ukrainian community localization</strong></h3>

<p>A new language is available! You can now use the Toolbox App in Ukrainian, thanks to the contribution of our users, Artem Dorosh and Volodymyr Lantsov. If you’d like to help us add a language that’s not yet available, contact us via <a href="https://youtrack.jetbrains.com/issue/TBX-8334/Community-translations" target="_blank" rel="noopener">YouTrack</a> or <a href="mailto:toolbox-support@jetbrains.com">email</a>.</p>

<h3 class="wp-block-heading"><strong>Toolbox Enterprise improvements</strong></h3>

<p>We also added several features for Toolbox Enterprise, a centralized solution for the provisioning and management of JetBrains IDEs to the developers’ machines in an organization. Toolbox Enterprise received plugin management improvements, as well as tool version notifications according to organizational guidelines.<br>If you think your organization would benefit from a streamlined IDE management solution, feel free to request a demo or get preview access on the <a href="https://www.jetbrains.com/toolbox-enterprise/" target="_blank" rel="noopener">Toolbox Enterprise page</a>.</p>

<p>For more information on changes and improvements, head over to the full <a href="https://youtrack.jetbrains.com/releaseNotes/TBX?q=Fix%20versions:%202.1%20%23Resolved%20-Duplicate%20-Answered&amp;title=Toolbox%20App%202.1%20Release%20Notes&amp;utm_source=product&amp;utm_medium=link&amp;utm_campaign=TBA" target="_blank" rel="noopener">release notes</a>.</p>

<p>Yours,</p>

<p>The Toolbox App team</p> ]]></content:encoded>

 </item> <item> <title>IntelliJ IDEA 2023.2.5 Is Out!</title> <link>https://blog.jetbrains.com/idea/2023/11/intellij-idea-2023-2-5/</link>

 <dc:creator><![CDATA[Maria Kosukhina]]></dc:creator> <pubDate>Thu, 09 Nov 2023 14:35:58 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/ij-2023.2.5-release-featured_blog_1280x720.png</featuredImage> <category><![CDATA[releases]]></category> <category><![CDATA[2023-2]]></category> <category><![CDATA[bug-fix-update]]></category> <category><![CDATA[intellij-idea-2023-2]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=idea&#038;p=403848</guid>

 <description><![CDATA[The IntelliJ IDEA 2023.2.5 bug-fix update is now available. You can update to this version from inside the IDE, using the&#160;Toolbox App, or using snaps if you are an Ubuntu user. You can also download it from our&#160;website. This update brings the following important fix: Please take a look at the full list of changes [&#8230;]]]></description> <content:encoded><![CDATA[ <p>The IntelliJ IDEA 2023.2.5 bug-fix update is now available. </p>

<p>You can update to this version from inside the IDE, using the&nbsp;<a href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noreferrer noopener">Toolbox App</a>, or using snaps if you are an Ubuntu user. You can also download it from our&nbsp;<a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noreferrer noopener">website</a>.</p>

<p>This update brings the following important fix:</p>

<ul> <li>The IDE no longer encounters startup failures accompanied by the&nbsp;<em>“Cannot connect to an already running IDE instance”</em>&nbsp;error, which was previously triggered by an improper termination of the previous session. [<a href="https://youtrack.jetbrains.com/issue/IDEA-330531/" target="_blank" rel="noreferrer noopener">IDEA-330531</a>]</li> </ul>

<p></p>

<p>Please take a look at the full list of changes in the <a href="https://youtrack.jetbrains.com/articles/IDEA-A-2100661744/IntelliJ-IDEA-2023.2.5-232.10227.8-build-Release-Notes" target="_blank" rel="noreferrer noopener">release notes</a>.</p>

<p>Happy developing!</p> ]]></content:encoded>

 </item> <item> <title>.NET Annotated Monthly &#124; November 2023</title> <link>https://blog.jetbrains.com/dotnet/2023/11/09/net-annotated-monthly-november-2023/</link>

 <dc:creator><![CDATA[Rachel Appel]]></dc:creator> <pubDate>Thu, 09 Nov 2023 12:45:41 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/dotnet-annotated-featured_blog_1280x720.png</featuredImage> <category><![CDATA[net-tools]]></category> <category><![CDATA[net-annotated]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=dotnet&#038;p=404137</guid>

 <description><![CDATA[Did you know? Just like you can keep your JetBrains products up-to-date with their Toolbox App, the open-source project WingetUI can do the same for all your other Windows tools. .NET news Featured content&#160; We’d like to thank Dennis Doomen for curating this month’s featured content! Dennis is a Microsoft MVP and Principal Consultant at [&#8230;]]]></description> <content:encoded><![CDATA[ <p>Did you know? Just like you can keep your JetBrains products up-to-date with their <a href="https://www.jetbrains.com/toolbox-app/" target="_blank" rel="noopener">Toolbox App</a>, the open-source project <a href="https://www.marticliment.com/wingetui/" target="_blank" rel="noopener">WingetUI</a> can do the same for all your other Windows tools.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2560" height="1440" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/dotnet-annotated-site-image-1280x720-1-1.png" alt="" class="wp-image-404139"/></figure>

<h2 class="wp-block-heading">.NET news</h2>

<ul> <li><a href="https://devblogs.microsoft.com/dotnet/dotnet-8-performance-improvements-in-dotnet-maui/" target="_blank" rel="noopener">.NET 8 Performance Improvements in .NET MAUI</a></li>

<li><a href="https://devblogs.microsoft.com/dotnet/performance-improvements-in-aspnet-core-8/" target="_blank" rel="noopener">Performance Improvements in ASP.NET Core 8</a></li>

<li><a href="https://devblogs.microsoft.com/dotnet/announcing-dotnet-8-rc2/" target="_blank" rel="noopener">Announcing .NET 8 Release Candidate 2</a></li>

<li><a href="https://devblogs.microsoft.com/dotnet/announcing-ef8-rc2/" target="_blank" rel="noopener">EF Core 8 Release Candidate 2: Smaller features in EF8</a></li>

<li><a href="https://devblogs.microsoft.com/dotnet/csharp-dev-kit-now-generally-available/" target="_blank" rel="noopener">C# Dev Kit – Now Generally Available</a></li> </ul>

<h2 class="wp-block-heading">Featured content&nbsp;</h2>

<p><em>We’d like to thank </em><strong><em>Dennis Doomen</em></strong><em> for curating this month’s featured content! Dennis is a Microsoft MVP and Principal Consultant at Dutch consultancy firm</em><a href="https://avivasolutions.nl/" target="_blank" rel="noopener"><em> </em><em>Aviva Solutions</em></a><em>. With 27 years of experience under his belt as a coding architect, he specializes in designing full-stack enterprise solutions based on .NET as well as providing coaching on all aspects of designing, building, documenting, deploying and maintaining software systems in an agile world. He is the author of</em><a href="https://www.fluentassertions.com" target="_blank" rel="noopener"><em> </em><em>Fluent Assertions</em></a><em>, an assertion library with 300 million downloads,</em><a href="https://www.liquidprojections.net" target="_blank" rel="noopener"><em> </em><em>Liquid Projections</em></a><em>, a set of libraries for building Event Sourcing projections and he has been maintaining</em><a href="https://www.csharpcodingguidelines.com" target="_blank" rel="noopener"><em> </em><em>coding guidelines for C#</em></a><em> since 2001. You can find him on</em><a href="https://twitter.com/ddoomen" target="_blank" rel="noopener"><em> </em><em>Twitter</em></a><em>,</em><a href="https://mastodon.social/@ddoomen" target="_blank" rel="noopener"><em> </em><em>Mastodon</em></a><em> and</em><a href="https://bsky.app/profile/ddoomen.bsky.social" target="_blank" rel="noopener"><em> </em><em>BlueSky</em></a><em>.</em></p>

<ul> <li>I’ve been a long-time fan of the GitKraken Git GUI and like to combine that with <a href="https://haacked.com/archive/2014/07/28/github-flow-aliases/" target="_blank" rel="noopener">some powerful</a> command-line aliases, but after watching Dan Clarke’s YouTube video on <a href="https://www.youtube.com/watch?v=Xzw6ttOIpnE" target="_blank" rel="noopener">Mastering Git in JetBrains Rider</a>, I discovered that I missed out on the amazing integrated source-control capabilities of Rider.<br></li>

<li>Newer versions of C# bring a lot of power and both Rider and ReSharper will help you get the most out of it. But what if you’re still stuck on .NET Framework 4.x where the necessary .NET types needed for those new features don’t exist? Then you add the <a href="https://github.com/Sergio0694/PolySharp" target="_blank" rel="noopener">PolySharp</a> NuGet package to your project. It’ll add the missing types and attributes and light up your project with newer C# features.<br></li>

<li>There seems to be a group of people that are concerned about the increasing presence of AI in our development toolchain. Well, I’m definitely not. I use a combination of GitHub CoPilot and the new JetBrains <a href="https://blog.jetbrains.com/idea/2023/06/ai-assistant-in-jetbrains-ides/">AI Assistant</a> and it has made a world of difference. Not only did it make me a lot more productive by removing repetitive work and providing mind-blowingly smart suggestions for my code, it also helped me understand and refactor some pretty ugly legacy code. So don’t be concerned and embrace AI!<br></li>

<li>One of the characteristics of maintainable code is that you can understand what it intends to do. Well-written en well-factored code can help with that. But what if you want to understand <em>why</em> that code was written, what options were considered and what the intent was? A technical decision log can help with that, but a clean source control history as well. Being able to master Git’s fixup commits and interactive rebase functionality is crucial for that, so make sure you <a href="https://www.continuousimprover.com/2020/03/keep-source-control-history-clean.html#dealing-with-code-review-comments" target="_blank" rel="noopener">know your tools</a>. <br></li> </ul>

<ul> <li>In the 15 years I’ve been practicing Test Driven Development, I’ve learned that finding the right scope for what most people refer to as the “unit” is one of the most crucial choices to make. The idea of a unit always being a class or smaller is way too dogmatic, so I tried to provide <a href="https://www.continuousimprover.com/2023/04/unit-testing-scope.html" target="_blank" rel="noopener">some examples</a> to debunk that idea.<br></li>

<li>In the past, we’ve been trained to create complicated abstractions to hide the “ugly” parts of our system such as the database. But it’s 2023 and databases should be treated as highly optimized implementation details of your architecture. As such, you want to include the interaction with the database in your automated tests. Fortunately we have Docker and open-source projects like <a href="https://dotnet.testcontainers.org/" target="_blank" rel="noopener">Test Containers for .NET</a> that allow you to spin up a Linux container with SQL Server in it, run a set of test cases and clean up after yourself. Simple and brilliant. <br></li>

<li>You may have heard the fuss around Moq and its attempts to monetize open-source. As a long-time OSS developer, I know that it’s hard to make companies realize how much value they get from OSS. I’ve tried to <a href="https://www.continuousimprover.com/2023/06/funding-open-source.html" target="_blank" rel="noopener">capture some ideas</a> on how to help with that, but I’ve also started to dedicate a small amount of money to a different project every month. What about you?<br></li>

<li>Talking about contributing to the open-source community, now is the time to help influence an open-source project with 300 million downloads, Fluent Assertions. We’re working on the next major version and there are plenty of ideas to keep it ahead of competition. Go check out the roadmap <a href="https://github.com/orgs/fluentassertions/projects/1" target="_blank" rel="noopener">here</a> or pick-up one of the <a href="https://github.com/fluentassertions/fluentassertions/issues?q=is%3Aopen+is%3Aissue+label%3Aup-for-grabs" target="_blank" rel="noopener">contribution-friendly issues</a>.&nbsp;</li> </ul>

<h2 class="wp-block-heading">Programing tutorials and tips&nbsp;</h2>

<p><strong>.NET tutorials and tips</strong></p>

<ul> <li><a href="https://poornimanayar.co.uk/blog/code-demos-made-easy-with-jetbrains-rider-live-templates/" target="_blank" rel="noopener">Code demos made easy with JetBrains Rider Live Templates</a> &#8211; Are you nervous about that upcoming presentation? Let Poornima Nayar walk you through code demos, the easy way.</li>

<li><a href="https://medium.com/@dench327/rider-plugin-development-basics-3a246b8a1a31" target="_blank" rel="noopener">Rider Plugin Development | Basics</a> &#8211; Sometimes you have a specific technical scenario that other companies don’t, and it would benefit from some IDE customizations. Denys Semko shows you how to get that plugin up and running.</li>

<li><a href="https://www.youtube.com/watch?v=_M0IgtGWnvE" target="_blank" rel="noopener">The Easiest Way to Create PDFs in .NET</a> &#8211; Everyone has to generate a PDF with C# at some point in their .NET career. And this video tutorial by Nick Chapsas demonstrates how to do just that, using QuestPDF.</li>

<li><a href="https://www.syncfusion.com/blogs/post/ocr-pdf-files-using-csharp.aspx" target="_blank" rel="noopener">Optical Character Recognition (OCR) Made Easy with the .NET PDF Library in C#</a> &#8211; And this article by Sowmiya Loganathan expands on creating PDFs by using OCR to do it!</li>

<li><a href="https://blog.nimblepros.com/blogs/creating-test-objects-via-design-patterns/" target="_blank" rel="noopener">Creating Test Objects via Design Patterns</a> &#8211; We often think about patterns in code but often less so, patterns in tests. Sarah Dutkiewicz reviews three patterns you can use to help you write better tests.&nbsp;</li>

<li><a href="https://askxammy.com/creating-animated-login-ui-in-net-maui-with-lottie/" target="_blank" rel="noopener">Creating Animated Login UI in .NET MAUI with Lottie</a> &#8211; Nice touches like an animated login are no longer nice touches, but features users have come to expect. So learn how to spice up that login with this post by Leomaris Reyes.</li>

<li><a href="https://www.telerik.com/blogs/crud-operations-ef-core-migrations-telerik-ui-net-maui-part-1" target="_blank" rel="noopener">CRUD Operations &amp; EF Core Migrations with Telerik UI for .NET MAUI (Part 1)</a> &#8211; Forms over data that include CRUD operations are the daily drivers of businesses everywhere.&nbsp; Rossitza Fakalieva shows us how to write code to support this core business pattern.</li>

<li><a href="https://codeopinion.com/code-review-refactoring-to-a-better-design/" target="_blank" rel="noopener">Code Review &amp; Refactoring to a Better Design</a> &#8211; Derek Comartin has published this awesome post on code reviews and refactoring, so that you can incorporate a continuous, better, design.</li>

<li><a href="https://andrewlock.net/series/exploring-the-dotnet-8-preview/" target="_blank" rel="noopener">Series: Exploring the .NET 8 preview</a> &#8211; Andrew Lock has been working on this fantastic series (12 parts and counting) on all things .NET 8. This is where to go for the latest .NET info.</li>

<li><a href="https://goatreview.com/bi-directional-grpc-stream-cache-server-csharp/" target="_blank" rel="noopener">Bi-Directional gRPC Stream Cache Server in C#</a> &#8211; This is a nice post by Cyril Canovas has a lot of good stuff in it. It takes the complex concetp of bi-directional streaming and condenses it into a readable post and code. Definitely check it out.</li>

<li><a href="https://nestenius.se/2023/10/09/debugging-cookie-problems/" target="_blank" rel="noopener">Debugging cookie problems in ASP.NET Core</a> &#8211; In the early days of the web the cookie was just a text file to track a bit of info across requests. Now, cookies are the basis of ad platforms and all sorts of advertising mayhem. So as developers we have to watch out for the issues that can arise, as blogged by Tore Nestenius.</li>

<li><a href="https://laurentkempe.com/2023/10/24/simplify-your-dotnet-docker-image-publishing-workflow-with-the-dotnet-sdk/" target="_blank" rel="noopener">Simplify your .NET Docker image publishing workflow with the .NET SDK</a> and <a href="https://laurentkempe.com/2023/10/30/publish-dotnet-docker-images-using-dotnet-sdk-and-github-actions/" target="_blank" rel="noopener">Publish .NET Docker images using .NET SDK and GitHub Actions</a> &#8211; Laurent Kempé has some nice articles on all things .NET and Docker. If you’re investigating any workflow or deployment enhancements and automations, you want to check out these posts.</li>

<li><a href="https://www.telerik.com/blogs/blazor-basics-event-callbacks" target="_blank" rel="noopener">Blazor Basics: Blazor Event Callbacks</a> &#8211; How does Blazor do events? Callbacks? Claudio Bernasconi explains it all here.</li>

<li><a href="https://chrlschn.dev/blog/2023/10/dotnet-task-parallel-library-vs-system-threading-channels/" target="_blank" rel="noopener">.NET Task Parallel Library vs System.Threading.Channels</a> &#8211; Is <code>System.Threading.Channels</code> better than .NET TPL? Charles Chen reports his findings after investigating each one.</li>

<li><a href="https://devblogs.microsoft.com/dotnet/the-convenience-of-system-text-json/" target="_blank" rel="noopener">The convenience of System.Text.Json</a> &#8211; Richard Lander dives deep into the <code>System.Text.Json</code> namespace to demonstrate performance, common usages, and where the code is convenient to use.&nbsp;</li>

<li><a href="https://khalidabuhakmeh.com/global-endpoint-filters-with-aspnet-core-minimal-apis" target="_blank" rel="noopener">Global Endpoint Filters with ASP.NET Core Minimal APIs</a> &#8211; Our own JetBrainer Khalid Abuhakmeh has published this very handy piece on Global Endpoint Filters in ASP.NET Core Minimal APIs.</li> </ul>

<p></p>

<p><strong>Related programming tutorials and tips:</strong></p>

<ul> <li><a href="https://eisenbergeffect.medium.com/html-attributes-properties-and-values-752b6eed8c21" target="_blank" rel="noopener">HTML Attributes, Properties, and Values</a> &#8211; Rob Eisenberg goes back to basics here with this post on HTML fundamentals.</li>

<li><a href="https://www.youtube.com/watch?v=uIfGIlD3lnw" target="_blank" rel="noopener">The WORST Domain Modeling Mistakes!</a> &#8211; Derek Comartin covers workflows, data and organizational structure, but throws in a plot twist: The problem is people.&nbsp;</li> </ul>

<p></p>

<p>This really does feel like 2002 all over again. &#x1f605; Drop a comment, folks: what do you think of this code?</p>

<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper"> <blockquote class="twitter-tweet" data-width="500" data-dnt="true"><p lang="en" dir="ltr">Wait a min! This feels like 2002 all over again 🤔 <a href="https://t.co/1GzRCA8UeB" target="_blank">https://t.co/1GzRCA8UeB</a></p>&mdash; Corey W (@coreylweathers) <a href="https://twitter.com/coreylweathers/status/1717855547171451286?ref_src=twsrc%5Etfw" target="_blank" rel="noopener">October 27, 2023</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </div></figure>

<h2 class="wp-block-heading">Interesting and cool stuff</h2>

<ul> <li><a href="https://www.youtube.com/watch?v=XZ3w_jec1v8" target="_blank" rel="noopener">The Economics of Programming Languages&#8221; (Strange Loop 2023)</a> &#8211; Evan Czaplicki, talks about the economics of doing all the jobs needed to launch a software product.&nbsp;</li> </ul>

<h2 class="wp-block-heading">And finally, the latest from JetBrains</h2>

<p>Here’s a chance to catch up on JetBrains news that you might have missed:</p>

<p>&#x1f5fa;&#xfe0f; Check out our <a href="https://www.jetbrains.com/dotnet/guide/" target="_blank" rel="noopener">.NET Guide</a>! Tutorials, tips, and tricks on .NET. &#x1f4fa;</p>

<p><strong>Blog posts, webinars, etc..:</strong></p>

<ul> <li><a href="https://blog.jetbrains.com/dotnet/2023/10/25/recordings-from-jetbrains-gamedev-day-2023-are-available/">Recordings From JetBrains GameDev Day 2023 Are Available</a></li>

<li><a href="https://blog.jetbrains.com/dotnet/2023/09/21/eager-lazy-and-explicit-loading-with-entity-framework-core/">Eager, Lazy and Explicit Loading with Entity Framework Core</a></li> </ul>

<p></p>

<p>Don’t miss this fantastic offer! <a href="https://www.codemag.com/" target="_blank" rel="noopener">CODE Magazine</a> is offering a <a href="https://www.codemag.com/subscribe/jetbrains?jb_newsletter&amp;amp;utm_medium=email&amp;amp;utm_campaign=free-subs" target="_blank" rel="noopener">free subscription</a> to JetBrains customers. Get your copy today!</p>

<p>Sharing is caring! So share content that you find useful with other readers. Don’t keep it to yourself! Send us an <a href="mailto:dotnet-advocates@jetbrains.com">email</a> with your suggestions for publication in future newsletters!</p>

<p align="center"><a class="jb-download-button" href="https://info.jetbrains.com/Dotnet-Annotated-Subscription.html" target="_blank" rel="noopener">Subscribe to .NET Annotated</a></p> ]]></content:encoded>

 </item> <item> <title>Amper – Improving the Build Tooling User Experience </title> <link> https://blog.jetbrains.com/blog/2023/11/09/amper-improving-the-build-tooling-user-experience/</link>

 <dc:creator><![CDATA[Anton Makeev]]></dc:creator> <pubDate>Thu, 09 Nov 2023 10:07:24 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/11/Blog-Featured-1280x720-2x-1.png</featuredImage> <product><![CDATA[fleet]]></product> <product><![CDATA[kotlin]]></product> <category><![CDATA[new-products]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=blog&#038;p=404245</guid>

 <description><![CDATA[Time and time again people adopting Kotlin have told us that they find dealing with build systems challenging. While many projects use wizards to configure environments so they’re ready for developers to get started, these also need to be maintained. New modules, platforms, dependencies, and other changes happen, which often leads to developers spending more [&#8230;]]]></description> <content:encoded><![CDATA[ <p>Time and time again people adopting Kotlin have told us that they find dealing with build systems challenging. While many projects use wizards to configure environments so they’re ready for developers to get started, these also need to be maintained. New modules, platforms, dependencies, and other changes happen, which often leads to developers spending more time fighting the build system and the IDE than actually focusing on the work they need to do. With Kotlin becoming a truly multiplatform language, this is emphasized even further with folks who are new to the JVM ecosystem.</p>

<p>For some time now, we’ve been working on a series of experiments internally at JetBrains to try and see how we could make this experience better for developers – not just from the perspective of defining projects, but also by providing better tooling support. These efforts are in sync with the <a href="https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-tooling-in-fleet/" target="_blank" data-type="link" data-id="https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-tooling-in-fleet/" rel="noreferrer noopener">other initiatives</a> we’re working on in regards to <a href="https://www.jetbrains.com/kotlin-multiplatform/" target="_blank" rel="noreferrer noopener">Kotlin Multiplatform</a>.</p>

<p>Today, we’re excited to share one such project, Amper, publicly. Before proceeding, however, a disclaimer – it’s still very much experimental, and our main goal for opening it up is to validate the ideas behind it and get your feedback.</p>

<h2 class="wp-block-heading">What is Amper?</h2>

<p>Amper is a tool for project configuration. Its goal is to improve the project configuration user experience and toolability, that is, the support inside the IDE, while also providing a smooth out-of-the box experience.&nbsp;</p>

<p>We’re currently looking at various aspects, including the configuration of projects for the purpose of building, packaging, publishing, and more. At its current stage, however, the focus is primarily on configuring projects for the purpose of building.</p>

<p>While the current use case is Kotlin and Kotlin Multiplatform, Amper also supports Java and Swift (as a requirement for multiplatform). However, the same approach to configuration could work for other languages and technology stacks in the future.&nbsp;</p>

<p>Amper is implemented as a Gradle plugin and uses YAML for its project configuration format. The goal right now is to validate the user experience, which is why we have chosen to build on a well-tested build tool like Gradle, providing a configuration layer on top of it.</p>

<p>In regards to using YAML, some of you may be wondering, why not Kotlin? While the decision on this markup language is not final, we do want to take a declarative approach. We believe that this not only allows for a more simplified configuration that is less error-prone, but it also helps us in terms of providing better tooling. And again, for the sake of sharing this experiment with you and validating ideas behind it, we’ve taken the simplest approach. Whether or not we’ll end up with a restrictive subset of Kotlin as the frontend language is yet to be decided. For now, our focus is on validating our ideas.&nbsp;</p>

<h2 class="wp-block-heading">Show me the code!</h2>

<p>Let’s take a very basic JVM &#8220;Hello, World!&#8221; project with the following directory structure in IntelliJ IDEA 2023.3:</p>

<figure class="wp-block-image size-full is-resized"><img decoding="async" loading="lazy" width="822" height="573" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/ij-jvm-structure.png" alt="" class="wp-image-404254" style="width:411px"/></figure>

<p>The <code>main.kt</code> and <code>MyTest.kt</code> files are just regular Kotlin files with nothing special in them. The interesting part is <code>module.yaml</code>, which is the Amper manifest file. For the above project structure, it would simply be:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="yaml" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group=""># Produce a JVM application product: jvm/app</pre>

<p>That&#8217;s it. The Kotlin and Java toolchains, test framework, and other necessary functionality is configured and available straight out of the box. You can build it, run it, write and run tests, and more. For more detailed information, check out the <a href="https://github.com/JetBrains/amper/tree/main/examples/jvm-with-tests" target="_blank" rel="noreferrer noopener">full example</a>.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2472" height="1718" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/ij-jvm-result-1.png" alt="" class="wp-image-404299"/></figure>

<p>Now, let&#8217;s look at a Compose Multiplatform project with Android, iOS, and desktop JVM apps, with the following project structure in Fleet:</p>

<figure class="wp-block-image size-full is-resized"><img decoding="async" loading="lazy" width="980" height="1130" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/fleet-kmp-structure.png" alt="" class="wp-image-404277" style="width:460px"/></figure>

<p>Notice how the <code>src/</code> folder contains Kotlin and Swift code together. It could, of course, also be Kotlin and Java.</p>

<p>Another aspect to highlight is the shared module with the common code in the <code>src</code> folder and the platform-specific code folders <code>src@ios</code> and <code>src@android</code> (learn more about <a href="http://github.com/JetBrains/amper/tree/main/docs/Documentation.md#project-layout" target="_blank" data-type="link" data-id="github.com/JetBrains/amper/tree/main/docs/Documentation.md#project-layout" rel="noreferrer noopener">project layouts</a>).</p>

<p>Here’s how the <code>ios-app/module.yaml</code> manifest file looks:</p>

<pre class="EnlighterJSRAW" data-enlighter-language="yaml" data-enlighter-theme="wpcustom" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group=""># Produce an iOS application product: ios/app

# Depend on the shared library module: dependencies: - ../shared

settings: # Enable Compose Multiplatform framework compose: enabled</pre>

<p>This is pretty straightforward: It defines an iOS application with a dependency on a shared module and enables the Compose Multiplatform framework. A more interesting example would be <code>shared/module.yaml</code>: </p>

<pre class="EnlighterJSRAW" data-enlighter-language="yaml" data-enlighter-theme="wpcustom" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group=""># Produce a shared library for the JVM, Android, and iOS platforms: product: type: lib platforms: [jvm, android, iosArm64, iosSimulatorArm64, iosX64]

# Shared Compose dependencies: dependencies: - org.jetbrains.compose.foundation:foundation:1.5.0-rc01: exported - org.jetbrains.compose.material3:material3:1.5.0-rc01: exported

# Android-only dependencies dependencies@android: # integration compose with activities - androidx.activity:activity-compose:1.7.2: exported - androidx.appcompat:appcompat:1.6.1: exported

# iOS-only dependencies with a dependency on a CocoaPod # note that CocoaPods dependencies are not yet implemented in the prototype dependencies@ios: - pod: 'FirebaseCore' version: '~> 6.6'

settings: # Enable Kotlin serialization kotlin: serialization: json # Enable Compose Multiplatform framework compose: enabled</pre>

<p>A couple of things are worth mentioning. First, note the platform-specific <code>dependencies:</code> sections with the <code>@&lt;platform&gt;</code> qualifier. <a href="https://github.com/JetBrains/amper/tree/main/docs/Documentation.md#platform-qualifier" target="_blank" rel="noreferrer noopener">The platform qualifier</a> can be used both in the manifest and also in the file layout. The qualifier organizes the code, dependencies, and settings for a certain platform.<br>Second, the dependencies: section allows not only Kotlin and Maven dependencies, but potentially also <a href="https://github.com/JetBrains/amper/tree/main/docs/Documentation.md#native-dependencies" target="_blank" rel="noreferrer noopener">platform-specific package managers</a>, such as CocoaPods, Swift Package Manager, and others based on the feedback we receive.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2756" height="1744" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/fleet-kmp-result.png" alt="" class="wp-image-404288" style="object-fit:cover"/></figure>

<p>Naturally, these examples show only a limited set of Amper features. Check out <a href="https://github.com/JetBrains/amper" target="_blank" rel="noreferrer noopener">the project on GitHub</a> and look at the <a href="https://github.com/JetBrains/amper/tree/main/docs/Documentation.md" target="_blank" data-type="link" data-id="https://github.com/JetBrains/amper/tree/main/docs/Documentation.md" rel="noreferrer noopener">documentation</a>, <a href="https://github.com/JetBrains/amper/tree/main/docs/Tutorial.md" target="_blank" rel="noreferrer noopener">tutorial</a>, and <a href="https://github.com/JetBrains/amper/tree/main/examples" target="_blank" rel="noreferrer noopener">example projects</a> to get more insight into Amper’s design and functionality.</p>

<h3 class="wp-block-heading">What it currently supports</h3>

<p>Amper currently supports creating applications targeting the JVM, Android, iOS, macOS, and Linux platforms. You can create applications based on both Kotlin (single and multiplatform) and Java.</p>

<p>Given that Amper is using Gradle as the backend, support for custom tasks, the ability to publish libraries to Maven, CocoaPods support, and the ability to package desktop apps are all provided via configuring the Gradle build-files directly.</p>

<h2 class="wp-block-heading">How to try it&nbsp;</h2>

<p>There are multiple ways to try Amper.</p>

<ul> <li>In <a href="https://www.jetbrains.com/idea/nextversion/" target="_blank" rel="noopener">IntelliJ IDEA</a> 2023.3 as of build 233.11799, for JVM and Android projects.</li>

<li>In <a href="https://www.jetbrains.com/fleet/download" target="_blank" rel="noopener">Fleet</a> as of build 1.26.104, for the JVM, Android, and Kotlin Multiplatform projects.</li>

<li>Using Gradle to build Amper projects from the CLI or CI/CD.</li> </ul>

<p>Check out the <a href="https://github.com/JetBrains/amper/blob/main/docs/Setup.md" target="_blank" rel="noopener">setup instructions</a>.</p>

<p>We’ve also prepared some <a href="https://github.com/JetBrains/amper/tree/main/examples" target="_blank" rel="noopener">samples</a>, as well as a <a href="https://github.com/JetBrains/amper/tree/main/docs/Tutorial.md" target="_blank" rel="noopener">tutorial</a>. In addition you can find more detailed <a href="https://github.com/JetBrains/amper/tree/main/docs/Documentation.md" target="_blank" rel="noopener">documentation</a> that covers different aspects of Amper.</p>

<h3 class="wp-block-heading">We need your feedback</h3>

<p>The project is at a stage where we desperately need your feedback. We’d love for you to give it a try and tell us whether it is simpler for defining projects or what use cases you’d need it to cover. Any feedback you may have is more than welcome. Please feel free to submit your suggestions and ideas using our <a href="https://youtrack.jetbrains.com/issues/AMPER" target="_blank" rel="noopener">issue tracker</a>, as comments in this post, or by joining our public <a href="https://kotlinlang.slack.com/archives/C062WG3A7T8" target="_blank" rel="noopener">Slack channel</a> and posting them there.</p>

<h2 class="wp-block-heading">A few final words</h2>

<p>We’ve prepared an <a href="https://github.com/JetBrains/amper/tree/main/docs/FAQ.md" target="_blank" rel="noopener">FAQ</a> below which should answer some of the questions you may have. However, we wanted to explicitly address a few points.</p>

<p>First and foremost, we are fully committed to supporting technologies such as Maven and Gradle in IntelliJ IDEA and Fleet. This project does not change our commitment to these technologies, and we continue to work very closely with our partners on this front.</p>

<p>Second, at its current stage, Amper is not a standalone build tool. While we have many ideas as to how we would like to drive the product forward, we also need to validate the things we’re currently working on before developing Amper further.&nbsp;</p>

<p>We hope other questions you may have are addressed in the <a href="https://github.com/JetBrains/amper/tree/main/docs/FAQ.md" target="_blank" rel="noopener">FAQ</a>. If not, please feel free to ask us in the comments, and we’ll do our best to answer them.</p> ]]></content:encoded>

 </item> <item> <title>ReSharper 2023.3 EAP 6: Code Analysis Performance Improvements, Support for C# 12 Interceptors, and Much More. </title> <link>https://blog.jetbrains.com/dotnet/2023/11/08/resharper-2023-3-eap-6/</link>

 <dc:creator><![CDATA[Sasha Ivanova]]></dc:creator> <pubDate>Wed, 08 Nov 2023 18:13:51 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/09/Blog_Featured_image_1280x720_ReSharper-2x.png</featuredImage> <category><![CDATA[net-tools]]></category> <category><![CDATA[eap]]></category> <category><![CDATA[news]]></category> <category><![CDATA[releases]]></category> <category><![CDATA[c-12]]></category> <category><![CDATA[razor]]></category> <category><![CDATA[resharper]]></category> <category><![CDATA[roslyn-analyzers]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=dotnet&#038;p=404193</guid>

 <description><![CDATA[The latest installment in the ReSharper 2023.3 Early Access Program has just been released, and it’s packed with updates.&#160; Before you download it, let’s take a look at the changes. Code analysis performance improvements ReSharper 2023.3 can now recognize and facilitate more scenarios where code analysis services can operate incrementally when interrupted by typing. This [&#8230;]]]></description> <content:encoded><![CDATA[ <p>The latest installment in the ReSharper 2023.3 Early Access Program has just been released, and it’s packed with updates.&nbsp;</p>

<p>Before you download it, let’s take a look at the changes.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="2560" height="1440" src="https://blog.jetbrains.com/wp-content/uploads/2023/09/Blog_Featured_image_1280x720_ReSharper-2x.png" alt="" class="wp-image-390855"/></figure>

<h2 class="wp-block-heading">Code analysis performance improvements</h2>

<p>ReSharper 2023.3 can now recognize and facilitate more scenarios where code analysis services can operate incrementally when interrupted by typing. This improvement is particularly beneficial for handling large files. The incremental approach ensures that only the necessary portions of the code are re-inspected when developers are still editing a file while the code analysis is ongoing. This speeds up continuous code analysis and conserves battery life on laptops.</p>

<h2 class="wp-block-heading">Reworked UX for the <em>Extract local functions</em> refactoring</h2>

<p>We&#8217;ve revamped the user experience for the <em>Extract local function</em> refactoring. In the past, selecting a location for the new function from the list of available options was challenging, and it wasn&#8217;t clear what would be affected by that choice.</p>

<p>With the updated UX, you&#8217;ll now see a preview of the new function&#8217;s signature directly in the code editor. This makes it easy to understand precisely where it will be inserted and how your choice will impact the introduced function. You can also see which variables will be transformed into parameters rather than closures, and which other functions will be relocated to allow calls at the new location.</p>

<figure class="wp-block-image"><img decoding="async" src="https://lh7-us.googleusercontent.com/Nnwwnlxp0D6rJ20GhszjXh7Mxkm9r0ihbjC8jIuSiqB9eOHgcM0FJcRq_DfiNn64WjdPK7VkLggjQ_zmw93VFinSAWM1mfDSIjaQy3hQA3CWNy9EU2JE0qk1b_EJSe3BZc2FglnsJTuNugKl9xYVDE4" alt=""/></figure>

<h2 class="wp-block-heading">Support for C# 12 interceptors</h2>

<p>The latest version of C# has introduced an experimental feature called <a href="https://github.com/dotnet/roslyn/blob/main/docs/features/interceptors.md" target="_blank" rel="noopener">interceptors</a>. This feature leverages the new [InterceptsLocation] attribute, which enables you to intercept and redirect specific method calls within your application to an interceptor instead of the original method. This can be used for optimization, as you’ll be able to fine-tune the interceptor method along with its exact arguments for a particular call site at compile time.&nbsp;</p>

<p>However, some source generators may override certain calls in your program and replace them with their own code.</p>

<p>ReSharper 2023.3 will alert you to an intercepted call with an inlay hint icon, which can take you to the interceptor with a single <kbd>Ctrl</kbd>+<kbd>Click</kbd>. It&#8217;s also now possible to navigate back from the <code>[InterceptsLocation]</code> attribute to the exact code position it intercepts. The same navigation actions are also available from the <kbd>Alt</kbd>+<kbd>Enter</kbd> menu.</p>

<p>You might want to exclude certain generators from adding visual noise to the editor. For instance, you may not be interested in the latest ASP.NET Core <a href="https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-dotnet-8-preview-7/#native-aot" target="_blank" rel="noopener">being able to generate interceptors to optimize your .MapGet calls</a>. To prevent calls intercepted by a particular framework from being displayed, you can add the fully qualified name of the generator responsible for producing interceptor methods to the exclusion list in ReSharper’s settings. Alternatively, you can also do so with <kbd>Alt</kbd>+<kbd>Enter</kbd> and context menus available directly from the inlay hint indicating the intercepted call. This means you don&#8217;t need to type the full name of the generator, or even know it beforehand to configure this behavior.</p>

<h2 class="wp-block-heading">Reworked integration of ReSharper and Visual Studio Quick Actions</h2>

<p>Visual Studio and ReSharper’s quick actions can complement each-other well when used discerningly. With ReSharper 2023.3 you can easily leverage the power of both systems. You can now tweak the settings to either use ReSharper’s quick actions exclusively, display suggestion icons for both, or invoke all quick actions from a single access point – the ReSharper bulb menu.&nbsp;</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="1538" height="1189" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/image-9.png" alt="" class="wp-image-404205"/></figure>

<p>We’ve also optimized Visual Studio’s Quick Actions retrieval, improving the performance.</p>

<h2 class="wp-block-heading">New code formatting engine for Razor</h2>

<p>ReSharper 2023.3 introduces a new formatting engine for Razor. It’s compatible with the current ReSharper&#8217;s C# formatter, thus supporting C# language constructs introduced in recent years and most of ReSharper&#8217;s new formatting options for C#. The new formatter also operates faster and is expected to have fewer issues. However, it does modify the default formatting for some code. Therefore, we have introduced an option to revert to the old formatting engine for Razor. You can find it in ReSharper’s Options under <em>Code Editing | Razor | </em>Code Style.</p>

<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="1538" height="815" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/image-10.png" alt="" class="wp-image-405001"/></figure>

<h2 class="wp-block-heading">Improved support for projects that use StyleCop.Analyzers code style inspections</h2>

<p><code>StyleCop.Analyzers</code> configuration files are now detected automatically in the projects where they are enabled, and StyleCop-related defaults are now provided even when no config files are present.</p>

<h2 class="wp-block-heading">File header templating overhaul</h2>

<p>Arbitrary file header variables can now be configured in the <a href="https://www.jetbrains.com/help/resharper/File_Header_Style.html#configure-file-header-in-settings" target="_blank" rel="noopener">file header settings page</a>. Also, there is now support for the StyleCop.Analyzers external file header templating. The <em>Update file header</em> <a href="https://www.jetbrains.com/help/resharper/File_Header_Style.html#insert-file-header-into-existing-files-with-code-cleanup" target="_blank" rel="noopener">cleanup stage</a> should now correctly use it when the StyleCop.Analyzers are configured for the project that the cleaned up file belongs to.</p>

<h2 class="wp-block-heading">С++ updates</h2>

<p>The EAP 6 build brings updates for HLSL support, code completion inside inactive preprocessor branches, a new inlay hint for forwarding references, and other updates.&nbsp;</p>

<p>For more information, please check out<a href="https://blog.jetbrains.com/rscpp/2023/11/06/resharper-cpp-2023-3-eap-hlsl-updates/"> this </a><a href="https://blog.jetbrains.com/rscpp/2023/11/08/resharper-cpp-2023-3-eap-hlsl-updates/">dedicated</a><a href="https://blog.jetbrains.com/rscpp/2023/11/06/resharper-cpp-2023-3-eap-hlsl-updates/"> blog post</a>.&nbsp;</p>

<h2 class="wp-block-heading">New inspections for identifying vulnerable API usages</h2>

<p>ReSharper 2023.3 brings a new security inspection feature designed to make published vulnerabilities more apparent and easier to understand.</p>

<p>The new inspections identify vulnerable NuGet packages in your project and highlight instances where vulnerable methods from these libraries are used in your code. If a vulnerability is detected, the system highlights the problematic code and offers quick actions to remedy it. These actions include recommending an update to a newer version of the package and offering in-depth information about the detected vulnerabilities.</p>

<figure class="wp-block-image"><img decoding="async" src="https://lh7-us.googleusercontent.com/nIJzoxcXbnZpii5rE0wSNdQL_E4X_atGOKdQJzbcEANQrv9fKcyFiKhtwGx-HLNMfS4BQPioqq8qCC1S_K90AI-YS3Ma84TtGS4N_snTwFq6-lpCduDf826F5U6iwrFI6oASNS5xOQJ5MDA2dIMIobU" alt=""/></figure>

<p>That’s it for now! For the full list of changes included in this build, please go to <a href="https://youtrack.jetbrains.com/issues/RSRP?q=Available%20in:%20%7B2023.3%20EAP%206%7D%20" target="_blank" rel="noopener">our issue tracker</a>.&nbsp;</p>

<p>As always, we’d be happy to hear from you. Tell us what you think about the latest changes in the comments section below or<a href="https://twitter.com/resharper" target="_blank" rel="noopener"> on X</a> (formerly Twitter).&nbsp;</p> ]]></content:encoded>

 </item> <item> <title>ReSharper C++ 2023.3 EAP: HLSL Updates and Completion in Inactive Code</title> <link>https://blog.jetbrains.com/rscpp/2023/11/08/resharper-cpp-2023-3-eap-hlsl-updates/</link>

 <dc:creator><![CDATA[Elvira Mustafina]]></dc:creator> <pubDate>Wed, 08 Nov 2023 18:13:43 +0000</pubDate> <featuredImage> https://blog.jetbrains.com/wp-content/uploads/2023/09/Blog_Featured_image_1280x720_ReSharperCPP-2x.png</featuredImage> <category><![CDATA[eap]]></category> <category><![CDATA[2023-3]]></category> <category><![CDATA[hlsl]]></category> <guid isPermaLink="false">https://blog.jetbrains.com/?post_type=rscpp&#038;p=402741</guid>

 <description><![CDATA[The new Early Access Program build is here with updates for HLSL support, code completion inside inactive preprocessor branches, a new inlay hint for forwarding references, and other updates. Read on for more details and check out the full list of issues we’ve fixed in this update. You can download the free EAP builds from [&#8230;]]]></description> <content:encoded><![CDATA[<p>The new Early Access Program build is here with updates for HLSL support, code completion inside inactive preprocessor branches, a new inlay hint for forwarding references, and other updates. Read on for more details and check out the <a href="https://youtrack.jetbrains.com/issues/RSCPP?q=Available%20in:%20%7B2023.3%20EAP%206%7D%20" target="_blank" rel="noopener">full list of issues</a> we’ve fixed in this update.</p> <p>You can download the free EAP builds from our website or via the <a href="https://www.jetbrains.com/toolbox-app" target="_blank" rel="noopener">Toolbox App</a>.</p> <p align="center"><a class="jb-download-button" href="https://www.jetbrains.com/resharper/nextversion/" target="_blank" rel="noopener"><i class="download-icon"></i>DOWNLOAD RESHARPER C++ EAP</a></p> <h2 id="hlsl_updates">HLSL updates</h2> <p>It’s been a while since we last introduced improvements for HLSL support. Meanwhile, the HLSL standard brought a few new language features, so it’s time to catch up. HLSL 2021 introduced C++-like templates for structs and functions with full specializations and template parameter inference where possible. With the latest ReSharper C++ update, you get full support for HLSL templates:<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/hlsl_template.png" alt="HLSL template" width="600" /><br /> This EAP build also introduces support for <code>RayQuery</code> and brings all of the corresponding flags to the code completion list:<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/hlsl_rayquery.png" alt="HLSL RayQuery" width="600" /></p> <h2 id="working_with_inactive_code">Working with inactive code</h2> <p>With platform or configuration-specific code, you can often find yourself editing currently inactive code blocks inside conditional preprocessor branches. Previously, code completion in inactive code only offered macros. In this EAP build, we&#8217;ve improved code completion in these scenarios to include symbols from the global scope:<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/completion_inside_inactive_if.png" alt="Completion in inactive code" width="600" /></p> <p>We’ve also updated <em>Find Usages</em> to find possible usages in inactive code and macro bodies. Previously, if you wanted to find these usages you had to use <em>Find Usages Advanced</em> and investigate textual occurrences. Now <em>Find Usages</em> results include potential usages in macro bodies and inactive code by default. These usages are grouped into separate sections to distinguish them from usages in normal code:<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/find_possible_usages.png" alt="Find possible usages" width="600" /></p> <h2 id="other_improvements">Other improvements</h2> <p>Reference inlay hints now have a separate <code>[&gt;&gt;]</code> text to spot forwarding references at a glance:<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/reference_hint.png" alt="Forwarding reference" width="600" /><br /> Another update is for C support: ReSharper C++ now supports the C99 <code>restrict</code> type qualifier that can be used in pointer declarations.<br /> <img decoding="async" src="https://blog.jetbrains.com/wp-content/uploads/2023/11/c_restrict.png" alt="C99 restrict" width="600" /></p> <p>To improve the code navigation experience, symbols that came from macro substitutions are now hidden from <em>Go to</em> and the <em>File Structure</em> window. This is helpful when working with unit tests, for example, since macros defined by unit testing frameworks often introduce many auxiliary symbols during their expansion.</p> <p>We’ve also added a new formatting setting for the braces layout to allow comments after <code>{</code>.</p> <p>Those are all the highlights of this EAP build! If you encounter any issues, don’t hesitate to report them to our <a href="https://youtrack.jetbrains.com/issues/RSCPP" target="_blank" rel="noopener">issue tracker</a>.</p> <p align="center"><a class="jb-download-button" href="https://www.jetbrains.com/resharper/nextversion/" target="_blank" rel="noopener"><i class="download-icon"></i>DOWNLOAD RESHARPER C++ EAP</a></p> <p><em>Your ReSharper C++ team</em><br /> JetBrains<br /> The Drive to Develop</p> ]]></content:encoded>

 </item> </channel> </rss>`;
