FLASK_ENV=development
FLASK_APP='wsgi.py'
FLASK_RUN_HOST='0.0.0.0'
FLASK_RUN_PORT=9090
FLASK_DEBUG=1

#load these manually inside your config.py file
TESTING=False

# SQLAlchemy ORM
SQLALCHEMY_TRACK_MODIFICATIONS
# Custom
POSTS_PER_PAGE=10

# JInja Templating Engine
EXPLAIN_TEMPLATE_LOADING
TEMPLATES_AUTO_RELOAD