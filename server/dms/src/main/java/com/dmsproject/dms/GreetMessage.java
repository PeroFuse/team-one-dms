package com.dmsproject.dms;

public class GreetMessage {
	private final int ID;
	private final String content;
	
	public GreetMessage(int id, String content) {
		this.ID = id;
		this.content = content;
	}

	public String getContent() {
		return content;
	}

	public int getID() {
		return ID;
	}
}
