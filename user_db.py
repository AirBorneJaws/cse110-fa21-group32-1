# User DB - Backend

import json
import sqlite3
import pickle 
import socket
import hashlib

#Instance Variables: conn, cur

class User_DB:
    def __init__(self, db = 'users.db'):
        self.conn = sqlite3.connect('users.db', check_same_thread=False) 
        self.cur = self.conn.cursor()
        # Create DB
        #cur.execute('DROP TABLE IF EXISTS Users')
        # TODO: DB Structure
        self.cur.execute('''
            CREATE TABLE IF NOT EXISTS Users( 
                Username STR PRIMARY KEY,
                Password STR,
                Token STR,
                Email STR,
                fName STR,
                lName STR,
                Calendar BLOB,
                Shopping_list BLOB,
                Recipes BLOB,
                Reviews BLOB,
                Favorites BLOB
            )''')

    def __del__(self):
        self.conn.close()

    def createUser(self, username, password, email, fname, lname):
        '''
        Inputs: 
        - username: string
        - password: string - TODO: Check password strength in frontend/backend?
        - profile: json converted dict
        Output:
        - A boolean indicating operation result
        '''

        # pickle
        # profile_blob = pickle.dumps(profile) --> convert whatever to a byte string for storage in db
        # profile = pickle.loads(profile) --> convert byte string back to original object

        try:
            # Create users with username, password, email, first & last name. Other stuff will be NULL.
            salt = "group32" #This section is responsible for token generation through hashing.
            toHash = username+password+salt #Stick everything together.
            token = hashlib.sha256(toHash.encode()).hexdigest()
            self.cur.execute("INSERT INTO Users(Username, Password, Token, Email, fName, lName) VALUES(?, ?, ?, ?, ?, ?)", (username, password, token, email, fname, lname))
            self.conn.commit()
            return True
        except sqlite3.IntegrityError as er: # username is primary key so no duplicates allowed
            print('ERROR: User ' + username + ' already exists.')
            return False

    def request(self, username, token, keys):
        '''
        TODO: Retrieve DB[key] 
        Inputs: 
        - username: string
        - token: string
        - keys: list of keys to query
        Output:
        - requested info or None if username/token don't match/exist
        '''
        self.cur.execute('SELECT %s FROM Users WHERE Username = ? AND Token = ?' % (', '.join(keys)), (username, token))
        profile = self.cur.fetchall() # fetchall returns all matched records, i.e. correct username & token
        if len(profile) > 1: # since no duplicate allowed, should have only one profile
            print('ERROR: Duplicate users found.')
            return None
        elif len(profile) == 0: # user not found / token incorrect
            return None
        else:
            return profile[0]

    def login(self, username, passwordHash):

        self.cur.execute('SELECT Password, Token FROM Users WHERE Username = "%s"' % (username))
        profile = self.cur.fetchall()
        hashedPassword = hashlib.sha256(str(profile[0][0]).encode()).hexdigest()

        if(hashedPassword == passwordHash):
            return profile[0][1]
        else:
            print("User does not exist in database!")
            return None


    # def request2(self, username, password, key):
    #     '''
    #     TODO: Retrieve DB[key] 
    #     Inputs: 
    #     - username: string
    #     - password: string
    #     Output:
    #     - requested info or None if username/passwd don't match/exist
    #     '''
    #     print(username, password)
    #     self.cur.execute('SELECT * FROM Users WHERE username = ? AND password = ?', (username, password))
    #     profile = self.cur.fetchall() # fetchall returns all matched records, i.e. correct username & password
    #     if len(profile) > 1: # since no duplicate allowed, should have only one profile
    #         print('ERROR: Duplicate users found.')
    #         return None
    #     elif len(profile) == 0: # user not found / passwd incorrect
    #         return None
    #     else:
    #         return profile[0]

    # TODO: Finalize CRUD functions

    def updateUser(self, username, token, updateVals):
        #Check to see if the sought updated columns exist in the database at all
        query = 'UPDATE Users SET ' + ', '.join(['%s = ?' % (p[0]) for p in updateVals.items()]) + ' WHERE username = ? AND Token = ?'
        self.cur.execute(query, [p[1] for p in updateVals.items()] + [username, token])
        self.conn.commit()
    
    def deleteUser(self,username,token):
        # Updates users with username, password, email, first & last name. Other stuff will be NULL.
        self.cur.execute("DELETE FROM Users WHERE username = ? AND token = ? ", (username, token))
        self.conn.commit()
        return True
    
    def addRecipe(self, username, token, id):
        self.cur.execute('SELECT Recipes FROM Users WHERE Username = ? AND Token = ?', (username, token))
        result = self.cur.fetchall()
        if len(result) == 0: return # no user found
        if result[0][0] is None : 
            recipes = pickle.dumps([id])
        else:
            recipes = pickle.loads(result[0][0]) # TODO: Integrity check
            if id not in recipes: recipes.append(id)
            recipes = pickle.dumps(recipes)
        self.updateUser(username, token, {'Recipes': recipes})
        self.conn.commit()

    def removeRecipe(self, username, token, id):
        self.cur.execute('SELECT Recipes FROM Users WHERE Username = ? AND Token = ?', (username, token))
        result = self.cur.fetchall()
        if len(result) == 0: return # no user found
        if result[0][0] is None: 
            recipes = pickle.dumps([])
        else:
            try:
                recipes = pickle.loads(result[0][0]) 
                recipes.remove(id)
            except ValueError:
                pass # not exists
            finally:
                recipes = pickle.dumps(recipes)
        self.updateUser(username, token, {'Recipes': recipes})
        self.conn.commit()


if __name__ == '__main__':
    new_db = User_DB()
    recipes = """(lp0
I123456
aI4567
aI329012
a."""
    #print(pickle.loads(recipes))
    new_db.createUser("MartinF123", "456", "mare@gmail.com", "Martin", "Flores")
#     shit = pickle.dumps([123456])
#    # print(pickle.loads(shit))
    new_db.addRecipe('MartinF123','456',123456)
    new_db.addRecipe('MartinF123','456',4567)
    new_db.addRecipe('MartinF123','456',329012)
    
    new_db.removeRecipe('MartinF123','456',123456)
    new_db.removeRecipe('MartinF123','456',4567)
    