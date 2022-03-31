package com.plateer.employee.service;

import com.plateer.employee.vo.Board;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardService {
    public List<Board> getBoardList();
    public Board viewBoard(@Param("_boardId") String boardId);
    public int insertBoard(@Param("_writer") String writer, @Param("_title") String title, @Param("_content" ) String content);
    public int updateBoard(@Param("_writer") String writer, @Param("_title") String title, @Param("_content") String content, @Param("_boardId") String boardId);
    public int deleteBoard(@Param("_boardId") String boardId);
    public int countBoardList();
}
