import sys
import os
import constants
import openai
# from langchain.embeddings.openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain_community.chat_models import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain_community.llms import OpenAI
from langchain_community.vectorstores import Chroma
import magic
mime = magic.Magic(mime=True)
file_type = mime.from_file("./data/data.txt")
print(file_type)

os.environ["OPENAI_API_KEY"]= constants.API_KEY
loader= DirectoryLoader( './data')
# index= VectorstoreIndexCreator().from_loaders([loader]) 
query= sys.argv[1]

embedding_model = OpenAIEmbeddings()  # Or another embedding model

# Step 2: Create a vector store (use FAISS for persistence)
vectorstore = FAISS.from_documents(loader.load(), embedding_model)

# Step 3: Use VectorstoreIndexCreator to build the index from the vectorstore
index_creator = VectorstoreIndexCreator(embedding=embedding_model, vectorstore=vectorstore)
index = index_creator.from_loaders([loader])
# Loader= TextLoader('./data/data.txt')

print(index.query(query, llm=ChatOpenAI))