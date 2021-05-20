FROM trytuesdaytest.azurecr.io/base-python

EXPOSE $PORT

COPY . .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    pip install gunicorn && \
    rm -rf ~/.cache/pip

CMD python __init__.py