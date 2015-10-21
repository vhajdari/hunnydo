import string

class ToDo(object):
	
   def __init__(self, db):
      self.db = db
      self.dolist = db.dolist

   def dolist(self):
      tasks = []
      for task in self.dolist.find():
         tasks.append(task['item'])
      return tasks

   def add_task(self, task):
      task = {'task':task}
      self.dolist.insert(task)