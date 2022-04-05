package com.plateer.employee.service;

import com.plateer.employee.vo.Comment;

import java.util.List;

public interface CommentService {

    public List<Comment> getComment(String boardId);

    public Integer countComment(String boardId);

    public Integer insertComment(String boardId, String writer, String content);

    public Integer updateComment(String commentId, String content);

    public Integer deleteComment(String commentId);
}
